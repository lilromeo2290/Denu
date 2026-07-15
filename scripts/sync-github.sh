#!/usr/bin/env bash
# =============================================================================
# Denu Nugoryiyi Za Festival — GitHub Auto-Sync Script
# -----------------------------------------------------------------------------
# Periodically commits and pushes local changes to the GitHub repository.
# Designed to be run via cron every 5 minutes.
#
# Repo:    https://github.com/lilromeo2290/Denu.git
# Branch:  main
# Worklog: /home/z/my-project/scripts/github-sync.log
# =============================================================================

set -euo pipefail

# --- Configuration -----------------------------------------------------------
PROJECT_DIR="/home/z/my-project"
REPO_URL="https://github.com/lilromeo2290/Denu.git"
BRANCH="main"
WORKLOG="/home/z/my-project/scripts/github-sync.log"
MAX_LOG_LINES=2000   # keep log file bounded

# --- Helpers -----------------------------------------------------------------
timestamp() { date "+%Y-%m-%d %H:%M:%S %Z"; }

log() {
  local entry="[$(timestamp)] $*"
  echo "$entry" | tee -a "$WORKLOG"
}

# Rotate log if it gets too big
rotate_log() {
  if [[ -f "$WORKLOG" ]]; then
    local lines
    lines=$(wc -l < "$WORKLOG")
    if (( lines > MAX_LOG_LINES )); then
      local tail_lines=$((MAX_LOG_LINES / 2))
      tail -n "$tail_lines" "$WORKLOG" > "${WORKLOG}.tmp"
      mv "${WORKLOG}.tmp" "$WORKLOG"
      log "[rotate] log file truncated to last $tail_lines lines"
    fi
  fi
}

# --- Main --------------------------------------------------------------------
cd "$PROJECT_DIR"

rotate_log
log "── sync start ──"

# Make sure we're on the right branch
current_branch=$(git rev-parse --abbrev-ref HEAD)
if [[ "$current_branch" != "$BRANCH" ]]; then
  log "[warn] not on $BRANCH (currently on $current_branch) — switching"
  git checkout "$BRANCH" >> "$WORKLOG" 2>&1 || {
    log "[error] could not switch to $BRANCH"
    exit 1
  }
fi

# Stage everything that's not gitignored
git add -A >> "$WORKLOG" 2>&1

# Check if there's anything to commit
if git diff --cached --quiet; then
  log "[info] no changes to commit"
else
  # Build a descriptive commit message
  changed_files=$(git diff --cached --name-only | wc -l | tr -d ' ')
  short_stat=$(git diff --cached --shortstat | sed 's/^ //')
  # Sample up to 5 file paths to include in the message
  sample_files=$(git diff --cached --name-only | head -5 | tr '\n' ',' | sed 's/,$//')

  commit_msg="auto-sync: ${short_stat}

Files (${changed_files}): ${sample_files}${changed_files:-0}
Synced at: $(timestamp)
Triggered by: periodic cron job"

  git commit -m "$commit_msg" >> "$WORKLOG" 2>&1
  log "[commit] ${short_stat} across ${changed_files} file(s)"
fi

# Fetch + push (push even if no new commit, in case local was ahead of remote)
git fetch origin "$BRANCH" >> "$WORKLOG" 2>&1 || log "[warn] fetch failed (continuing)"

# Check if we're ahead of remote
ahead=$(git rev-list --count "origin/${BRANCH}..HEAD" 2>/dev/null || echo "0")
behind=$(git rev-list --count "HEAD..origin/${BRANCH}" 2>/dev/null || echo "0")

if (( ahead > 0 )); then
  if git push origin "$BRANCH" >> "$WORKLOG" 2>&1; then
    log "[push] pushed ${ahead} commit(s) to origin/${BRANCH}"
  else
    log "[error] push failed — will retry next cycle"
    exit 1
  fi
elif (( behind > 0 )); then
  log "[info] local is behind remote by ${behind} commit(s) — pulling"
  if git pull --rebase origin "$BRANCH" >> "$WORKLOG" 2>&1; then
    log "[pull] rebased on top of origin/${BRANCH}"
  else
    log "[error] pull --rebase failed — manual intervention needed"
    exit 1
  fi
else
  log "[info] in sync with origin/${BRANCH}"
fi

log "── sync end ──"
exit 0

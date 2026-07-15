#!/usr/bin/env bash
# =============================================================================
# Denu Nugoryiyi Za Festival — GitHub Sync Daemon (background watcher)
# -----------------------------------------------------------------------------
# Runs in the background, executing sync-github.sh every 5 minutes.
# Started via nohup since crontab/systemd aren't available in this sandbox.
#
# Start:   nohup /home/z/my-project/scripts/sync-daemon.sh &
# Stop:    pkill -f sync-daemon.sh
# Status:  tail -f /home/z/my-project/scripts/github-sync.log
# =============================================================================

set -euo pipefail

INTERVAL_SECONDS=300   # 5 minutes — minimum allowed interval
SYNC_SCRIPT="/home/z/my-project/scripts/sync-github.sh"
DAEMON_LOG="/home/z/my-project/scripts/sync-daemon.log"
PIDFILE="/home/z/my-project/scripts/sync-daemon.pid"

# --- Prevent multiple instances ---
if [[ -f "$PIDFILE" ]]; then
  existing_pid=$(cat "$PIDFILE" 2>/dev/null || echo "")
  if [[ -n "$existing_pid" ]] && kill -0 "$existing_pid" 2>/dev/null; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] daemon already running (pid $existing_pid) — exiting" >> "$DAEMON_LOG"
    exit 0
  fi
  rm -f "$PIDFILE"
fi

echo $$ > "$PIDFILE"

cleanup() {
  rm -f "$PIDFILE"
  local ts
  ts=$(date '+%Y-%m-%d %H:%M:%S')
  echo "[$ts] daemon stopping" >> "$DAEMON_LOG"
  exit 0
}
trap cleanup INT TERM EXIT

{
  ts=$(date '+%Y-%m-%d %H:%M:%S')
  echo "[$ts] daemon started (pid $$) — syncing every ${INTERVAL_SECONDS}s"
} >> "$DAEMON_LOG"

# --- Main loop ---
while true; do
  # Run the sync; never let a failure kill the daemon
  if ! "$SYNC_SCRIPT" >> "$DAEMON_LOG" 2>&1; then
    ts=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$ts] sync script returned non-zero — will retry next cycle" >> "$DAEMON_LOG"
  fi
  ts=$(date '+%Y-%m-%d %H:%M:%S')
  echo "[$ts] sleeping ${INTERVAL_SECONDS}s…" >> "$DAEMON_LOG"
  sleep "$INTERVAL_SECONDS"
done

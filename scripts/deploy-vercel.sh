#!/usr/bin/env bash
# =============================================================================
# Denu Nugoryiyi Za Festival — Vercel Production Deploy
# -----------------------------------------------------------------------------
# Deploys the current state of /home/z/my-project to Vercel production.
#
# Usage:
#   ./deploy-vercel.sh                # deploy to production
#   ./deploy-vercel.sh --preview      # create a preview deployment
#
# Token is read from ~/.vercel/token (chmod 600) — never hardcode in the script.
# Project: my-project (lilromeo2290-6670s-projects)
# =============================================================================

set -euo pipefail

PROJECT_DIR="/home/z/my-project"
TOKEN_FILE="$HOME/.vercel/token"
WORKLOG="$PROJECT_DIR/scripts/vercel-deploy.log"
PROJECT_NAME="my-project"
PRODUCTION_URL="https://my-project-chi-peach-24.vercel.app"

timestamp() { date "+%Y-%m-%d %H:%M:%S %Z"; }
log() { echo "[$(timestamp)] $*" | tee -a "$WORKLOG"; }

# --- Token ---
if [[ ! -f "$TOKEN_FILE" ]]; then
  echo "ERROR: Vercel token not found at $TOKEN_FILE"
  echo "Create it with:"
  echo "  mkdir -p ~/.vercel && echo 'YOUR_TOKEN_HERE' > $TOKEN_FILE && chmod 600 $TOKEN_FILE"
  exit 1
fi
TOKEN=$(cat "$TOKEN_FILE")

# --- Mode ---
MODE="prod"
if [[ "${1:-}" == "--preview" ]]; then
  MODE="preview"
fi

cd "$PROJECT_DIR"
log "── vercel deploy start ($MODE) ──"

# Verify link exists
if [[ ! -f ".vercel/project.json" ]]; then
  log "[setup] linking project to vercel…"
  echo "y" | vercel link --token "$TOKEN" --yes >> "$WORKLOG" 2>&1
fi

# Deploy
if [[ "$MODE" == "prod" ]]; then
  OUTPUT=$(vercel deploy --prod --yes --token "$TOKEN" 2>&1) || {
    log "[error] deploy failed:"
    echo "$OUTPUT" | tail -30 >> "$WORKLOG"
    exit 1
  }
else
  OUTPUT=$(vercel deploy --yes --token "$TOKEN" 2>&1) || {
    log "[error] preview deploy failed:"
    echo "$OUTPUT" | tail -30 >> "$WORKLOG"
    exit 1
  }
fi

# Extract the production URL from output
DEPLOY_URL=$(echo "$OUTPUT" | grep -oE 'https://[a-zA-Z0-9.-]+\.vercel\.app' | head -1)
log "[deploy] $MODE deployment ready: $DEPLOY_URL"
if [[ "$MODE" == "prod" ]]; then
  log "[alias] production alias: $PRODUCTION_URL"
fi

echo ""
echo "✓ Deployed to: $DEPLOY_URL"
if [[ "$MODE" == "prod" ]]; then
  echo "✓ Production URL: $PRODUCTION_URL"
fi

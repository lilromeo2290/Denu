#!/usr/bin/env bash
# =============================================================================
# Denu Nugoryiyi Za Festival — GitHub Sync Control
# -----------------------------------------------------------------------------
# Usage:
#   ./sync-control.sh status   — show daemon + repo status
#   ./sync-control.sh start    — start the background sync daemon
#   ./sync-control.sh stop     — stop the daemon
#   ./sync-control.sh restart  — restart the daemon
#   ./sync-control.sh now      — run a single sync immediately
#   ./sync-control.sh log      — tail the sync worklog
# =============================================================================

set -euo pipefail

PROJECT_DIR="/home/z/my-project"
DAEMON_SCRIPT="$PROJECT_DIR/scripts/sync-daemon.sh"
SYNC_SCRIPT="$PROJECT_DIR/scripts/sync-github.sh"
PIDFILE="$PROJECT_DIR/scripts/sync-daemon.pid"
DAEMON_LOG="$PROJECT_DIR/scripts/sync-daemon.log"
WORKLOG="$PROJECT_DIR/scripts/github-sync.log"

is_running() {
  [[ -f "$PIDFILE" ]] || return 1
  local pid
  pid=$(cat "$PIDFILE" 2>/dev/null || echo "")
  [[ -n "$pid" ]] && kill -0 "$pid" 2>/dev/null
}

case "${1:-status}" in
  status)
    echo "=== GitHub Sync Status ==="
    if is_running; then
      pid=$(cat "$PIDFILE")
      echo "Daemon:     RUNNING (pid $pid)"
    else
      echo "Daemon:     STOPPED"
    fi
    echo "Repo:       $(cd "$PROJECT_DIR" && git remote get-url origin)"
    echo "Branch:     $(cd "$PROJECT_DIR" && git rev-parse --abbrev-ref HEAD)"
    echo "Local HEAD: $(cd "$PROJECT_DIR" && git rev-parse --short HEAD)"
    echo "Remote HEAD:$(cd "$PROJECT_DIR" && git ls-remote origin main 2>/dev/null | awk '{print substr($1,1,7)}')"
    local_ahead=$(cd "$PROJECT_DIR" && git rev-list --count origin/main..HEAD 2>/dev/null || echo "0")
    local_behind=$(cd "$PROJECT_DIR" && git rev-list --count HEAD..origin/main 2>/dev/null || echo "0")
    echo "Ahead:      $local_ahead commit(s)"
    echo "Behind:     $local_behind commit(s)"
    echo ""
    echo "=== Recent worklog ==="
    tail -8 "$WORKLOG" 2>/dev/null || echo "(no worklog yet)"
    ;;

  start)
    if is_running; then
      echo "Daemon already running (pid $(cat "$PIDFILE"))"
      exit 0
    fi
    setsid bash "$DAEMON_SCRIPT" < /dev/null > "$DAEMON_LOG" 2>&1 &
    disown
    sleep 2
    if is_running; then
      echo "✓ Daemon started (pid $(cat "$PIDFILE"))"
    else
      echo "✗ Daemon failed to start — check $DAEMON_LOG"
      exit 1
    fi
    ;;

  stop)
    if is_running; then
      pid=$(cat "$PIDFILE")
      kill "$pid" 2>/dev/null || true
      sleep 1
      kill -9 "$pid" 2>/dev/null || true
      rm -f "$PIDFILE"
      echo "✓ Daemon stopped (was pid $pid)"
    else
      echo "Daemon not running"
    fi
    ;;

  restart)
    "$0" stop || true
    sleep 1
    "$0" start
    ;;

  now)
    echo "Running immediate sync…"
    "$SYNC_SCRIPT"
    ;;

  log)
    echo "Tailing $WORKLOG (Ctrl+C to stop)…"
    tail -f "$WORKLOG"
    ;;

  *)
    echo "Usage: $0 {status|start|stop|restart|now|log}"
    exit 1
    ;;
esac

# GitHub Auto-Sync — Denu Nugoryiyi Za Festival

This folder contains scripts that automatically commit and push changes from
`/home/z/my-project` to the GitHub repository at
**https://github.com/lilromeo2290/Denu.git** every 5 minutes.

## Files

| File                  | Purpose                                                              |
| --------------------- | -------------------------------------------------------------------- |
| `sync-github.sh`      | One-shot sync — stages, commits (if needed), and pushes to origin.   |
| `sync-daemon.sh`      | Background daemon that calls `sync-github.sh` every 5 minutes.       |
| `sync-control.sh`     | Friendly control script: `status` / `start` / `stop` / `restart` / `now` / `log`. |
| `github-sync.log`     | Worklog of every sync run (auto-rotates when it exceeds 2000 lines). |
| `sync-daemon.log`     | Daemon lifecycle log (start/stop/sleep messages).                    |

## Quick commands

```bash
# Check daemon + repo status
./sync-control.sh status

# Run an immediate sync (don't wait for the 5-minute cycle)
./sync-control.sh now

# Stop / start / restart the background daemon
./sync-control.sh stop
./sync-control.sh start
./sync-control.sh restart

# Tail the worklog live
./sync-control.sh log
```

## How it works

1. The daemon (`sync-daemon.sh`) is started with `setsid` so it survives shell
   exits, and writes its PID to `sync-daemon.pid`.
2. Every 5 minutes it calls `sync-github.sh`, which:
   - `git add -A` — stages everything not gitignored
   - If there are staged changes, commits with a descriptive message
     (`auto-sync: <shortstat>` + sample file list + timestamp)
   - `git fetch origin main` to refresh remote refs
   - `git push origin main` if local is ahead
   - `git pull --rebase` if local is behind (handles edits made directly on GitHub)
3. Every action is logged to `github-sync.log` with UTC timestamps.

## Authentication

- Credentials are stored in `~/.git-credentials` (chmod 600) using git's
  built-in `credential.helper = store`.
- The token is **never** embedded in the remote URL, so `git remote -v` stays
  clean and the token is not visible in process listings.

## Security note

The GitHub Personal Access Token used to set this up was shared in plain text
during the initial setup chat. **It should be revoked and regenerated at
https://github.com/settings/tokens** after this session. To update the stored
credentials, edit `~/.git-credentials` and replace the old token with the new
one in this format:

```
https://lilromeo2290:<NEW_TOKEN>@github.com
```

Then restart the daemon with `./sync-control.sh restart`.

# GitHub Auto-Sync + Vercel Auto-Deploy — Denu Nugoryiyi Za Festival

This folder contains scripts that automatically commit and push changes from
`/home/z/my-project` to GitHub AND deploy to Vercel production every 5 minutes.

## Live site

**Production URL:** https://my-project-chi-peach-24.vercel.app

## Files

| File                  | Purpose                                                              |
| --------------------- | -------------------------------------------------------------------- |
| `sync-github.sh`      | One-shot sync — stages, commits, pushes to GitHub, then deploys to Vercel. |
| `sync-daemon.sh`      | Background daemon that calls `sync-github.sh` every 5 minutes.       |
| `sync-control.sh`     | Friendly control script: `status` / `start` / `stop` / `restart` / `now` / `log` / `deploy`. |
| `deploy-vercel.sh`    | Standalone Vercel production deploy (reads token from `~/.vercel/token`). |
| `github-sync.log`     | Worklog of every sync + deploy run (auto-rotates when > 2000 lines). |
| `vercel-deploy.log`   | Vercel-specific deploy log.                                          |

## Quick commands

```bash
# Check daemon + repo status
./sync-control.sh status

# Run an immediate GitHub sync + Vercel deploy
./sync-control.sh now

# Deploy to Vercel only (skip GitHub)
./sync-control.sh deploy

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
   - `git fetch origin main` to refresh remote refs
   - `git push origin main` if local is ahead
   - `git pull --rebase` if local is behind (handles edits made directly on GitHub)
   - **After a successful push, automatically calls `deploy-vercel.sh`** to push the
     new code to Vercel production
3. Every action is logged to `github-sync.log` with UTC timestamps.

## Authentication

- **GitHub** credentials stored in `~/.git-credentials` (chmod 600) using git's
  `credential.helper = store`. The token is **never** embedded in the remote URL.
- **Vercel** token stored in `~/.vercel/token` (chmod 600). The deploy script reads
  from this file — never hardcoded.

## Security note

Both the GitHub Personal Access Token and Vercel token were shared in plain text
during the initial setup chat. **They should both be revoked and regenerated:**
- GitHub: https://github.com/settings/tokens
- Vercel: https://vercel.com/account/tokens

To update stored credentials:
- GitHub: edit `~/.git-credentials` and replace the token in
  `https://lilromeo2290:<TOKEN>@github.com`
- Vercel: edit `~/.vercel/token` with the new token

Then restart the daemon with `./sync-control.sh restart`.

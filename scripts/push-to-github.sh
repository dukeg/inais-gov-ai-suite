#!/usr/bin/env bash
set -euo pipefail
REPO_URL=${1:-}
if [ -z "$REPO_URL" ]; then echo "Usage: ./scripts/push-to-github.sh https://github.com/<user>/<repo>.git"; exit 1; fi
git init
git add .
git commit -m "Initial INAIS government AI suite"
git branch -M main
git remote add origin "$REPO_URL"
git push -u origin main

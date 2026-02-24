@echo off
where git >nul 2>&1
if errorlevel 1 (
  echo Git not found. Install Git (winget/choco/installer) or use Portable Git.
  echo See https://git-scm.com/download/win
  pause
  exit /b 1
)

echo Adding files...
git add netlify.toml public/_redirects package.json package-lock.json tsconfig.json src/types/mapbox-gl.d.ts src/types/mapbox-gl/index.d.ts

echo Committing changes...
git commit -m "chore(netlify): add SPA redirects and mapbox type fixes"

echo Pushing to remote...
git push

echo Done.
pause

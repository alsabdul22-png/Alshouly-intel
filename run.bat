@echo off
REM Intel OSINT Dashboard - Quick Start
REM This script starts a local web server and opens the dashboard

echo.
echo ================== INTEL OSINT DASHBOARD ==================
echo.
echo Starting development server on http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
echo =========================================================
echo.

python -m http.server 8000

pause

@echo off
echo Starting Global Disease Tracker Website...
echo.

:: Check if Node.js is installed
node --version > nul 2>&1
if errorlevel 1 (
    echo Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit
)

:: Install dependencies if needed
echo Installing dependencies...
npm install

:: Start the server
echo Starting server...
echo.
echo Open your browser and go to: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.
node server.js 
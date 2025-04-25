@echo off
echo Starting Global Disease Tracker Website...
echo.
echo This will start a local server on port 8000
echo.
echo Make sure all these folders exist in the current directory:
echo - css/
echo - js/
echo - data/
echo - map images/
echo - smallpox_deaths/
echo - hiv_infected/
echo.
echo Press any key to continue...
pause > nul

:: Check if Python is installed
python --version > nul 2>&1
if errorlevel 1 (
    echo Python is not installed or not in PATH
    echo Please install Python from https://www.python.org/downloads/
    echo Make sure to check "Add Python to PATH" during installation
    pause
    exit
)

:: Start the Python HTTP server
echo Starting server...
echo.
echo Open your browser and go to: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8000 
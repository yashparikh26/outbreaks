@echo off
echo Stopping Global Disease Tracker Website...
echo.

:: Kill Python processes
taskkill /F /IM python.exe /T > nul 2>&1
if errorlevel 1 (
    echo No Python server found running
) else (
    echo Server stopped successfully
)

echo.
echo Press any key to exit...
pause > nul 
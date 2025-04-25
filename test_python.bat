@echo off
echo Testing Python installation...
python --version
if errorlevel 1 (
    echo Python is not installed or not in PATH
    echo Please install Python from https://www.python.org/downloads/
    echo Make sure to check "Add Python to PATH" during installation
) else (
    echo Python is installed correctly
)
pause 
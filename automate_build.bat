@echo off
:: Clear any existing log file
if exist "build_log.txt" del "build_log.txt"

echo Starting GrowAI website build and deployment process... > build_log.txt

:: Step 1: Navigate to the project directory
echo Step 1: Navigating to project directory... >> build_log.txt
cd /d "C:\nas-share\GrowAI-Website\react-app" || (
  echo ERROR: Could not navigate to C:\nas-share\GrowAI-Website\react-app. Check the path. >> build_log.txt
  type build_log.txt
  pause
  exit /b 1
)
echo Successfully navigated to project directory. >> build_log.txt

:: Step 2: Check if package.json exists
if not exist "package.json" (
  echo ERROR: package.json not found in C:\nas-share\GrowAI-Website\react-app. >> build_log.txt
  type build_log.txt
  pause
  exit /b 1
)
echo package.json found. >> build_log.txt

:: Step 3: Pull the latest changes from GitHub
echo Step 3: Pulling latest changes from GitHub... >> build_log.txt
git pull origin main >> build_log.txt 2>&1
if errorlevel 1 (
  echo ERROR: Failed to pull changes. Check your repository or network connection. >> build_log.txt
  type build_log.txt
  pause
  exit /b 1
)
echo Latest changes pulled successfully. >> build_log.txt

:: Step 4: Install dependencies
echo Step 4: Installing dependencies... >> build_log.txt
npm install >> build_log.txt 2>&1
if errorlevel 1 (
  echo ERROR: Failed to install dependencies. Check your package.json or internet connection. >> build_log.txt
  type build_log.txt
  pause
  exit /b 1
)
echo Dependencies installed successfully. >> build_log.txt

:: Step 5: Build the project
echo Step 5: Building the React project... >> build_log.txt
npm run build >> build_log.txt 2>&1
if errorlevel 1 (
  echo ERROR: Build failed. Check your build script in package.json or project configuration. >> build_log.txt
  type build_log.txt
  pause
  exit /b 1
)
echo Build completed successfully. >> build_log.txt

:: Step 6: (Optional) Deploy to Netlify
where netlify >nul 2>nul
if %errorlevel% equ 0 (
  echo Step 6: Deploying to Netlify... >> build_log.txt
  netlify deploy --prod --dir=build >> build_log.txt 2>&1
  if errorlevel 1 (
    echo ERROR: Deployment failed. Ensure Netlify CLI is configured and linked to your site. >> build_log.txt
    type build_log.txt
    pause
    exit /b 1
  )
  echo Deployment to Netlify completed successfully. >> build_log.txt
) else (
  echo Note: Netlify CLI not found. Skipping deployment. Install it with 'npm install -g netlify-cli' if needed. >> build_log.txt
)

echo SUCCESS: Website build process completed! >> build_log.txt
type build_log.txt
pause
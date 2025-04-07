@echo off
setlocal EnableDelayedExpansion

:: Set the root directory
set ROOT_DIR=C:\nas-share\GrowAI-Website

:: Create main directories
echo Creating directory structure...
mkdir "%ROOT_DIR%\styles"
mkdir "%ROOT_DIR%\scripts"
mkdir "%ROOT_DIR%\images"
mkdir "%ROOT_DIR%\react-app"

:: Create HTML files
echo Creating HTML files...
:: Homepage (index.html)
(
echo ^<!DOCTYPE html^>
echo ^<html lang="en"^>
echo ^<head^>
echo     ^<meta charset="UTF-8"^>
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^>
echo     ^<title^>GrowAI - Homepage^</title^>
echo     ^<link rel="stylesheet" href="styles/homepage.css"^>
echo     ^<link rel="stylesheet" href="styles/global.css"^>
echo ^</head^>
echo ^<body^>
echo     ^<header^>
echo         ^<nav^>
echo             ^<a href="index.html"^>Home^</a^>
echo             ^<a href="content-generation.html"^>Generate Content^</a^>
echo             ^<a href="pricing.html"^>Pricing^</a^>
echo             ^<a href="about.html"^>About^</a^>
echo             ^<a href="contact.html"^>Contact^</a^>
echo         ^</nav^>
echo     ^</header^>
echo     ^<main^>
echo         ^<!-- Homepage content will go here --^>
echo     ^</main^>
echo     ^<footer^>
echo         ^<p^>© 2025 GrowAI. All rights reserved.^</p^>
echo         ^<p^>^<a href="mailto:info@growai.it"^>Contact Us^</a^> ^| ^<a href="https://linkedin.com/company/growai-it"^>LinkedIn^</a^> ^| ^<a href="https://x.com/GrowAI_it"^>X^</a^> ^| ^<a href="https://instagram.com/growai.official"^>Instagram^</a^> ^| ^<a href="https://facebook.com/[YourPage]"^>Facebook^</a^>^</p^>
echo     ^</footer^>
echo     ^<script src="scripts/homepage.js"^>^</script^>
echo     ^<script src="scripts/global.js"^>^</script^>
echo ^</body^>
echo ^</html^>
) > "%ROOT_DIR%\index.html"

:: Content Generation (content-generation.html)
(
echo ^<!DOCTYPE html^>
echo ^<html lang="en"^>
echo ^<head^>
echo     ^<meta charset="UTF-8"^>
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^>
echo     ^<title^>GrowAI - Content Generation^</title^>
echo     ^<link rel="stylesheet" href="styles/content-generation.css"^>
echo     ^<link rel="stylesheet" href="styles/global.css"^>
echo ^</head^>
echo ^<body^>
echo     ^<header^>
echo         ^<nav^>
echo             ^<a href="index.html"^>Home^</a^>
echo             ^<a href="content-generation.html"^>Generate Content^</a^>
echo             ^<a href="pricing.html"^>Pricing^</a^>
echo             ^<a href="about.html"^>About^</a^>
echo             ^<a href="contact.html"^>Contact^</a^>
echo         ^</nav^>
echo     ^</header^>
echo     ^<main^>
echo         ^<!-- Content Generation content will go here --^>
echo     ^</main^>
echo     ^<footer^>
echo         ^<p^>© 2025 GrowAI. All rights reserved.^</p^>
echo         ^<p^>^<a href="mailto:info@growai.it"^>Contact Us^</a^> ^| ^<a href="https://linkedin.com/company/growai-it"^>LinkedIn^</a^> ^| ^<a href="https://x.com/GrowAI_it"^>X^</a^> ^| ^<a href="https://instagram.com/growai.official"^>Instagram^</a^> ^| ^<a href="https://facebook.com/[YourPage]"^>Facebook^</a^>^</p^>
echo     ^</footer^>
echo     ^<script src="scripts/content-generation.js"^>^</script^>
echo     ^<script src="scripts/global.js"^>^</script^>
echo ^</body^>
echo ^</html^>
) > "%ROOT_DIR%\content-generation.html"

:: Pricing (pricing.html)
(
echo ^<!DOCTYPE html^>
echo ^<html lang="en"^>
echo ^<head^>
echo     ^<meta charset="UTF-8"^>
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^>
echo     ^<title^>GrowAI - Pricing^</title^>
echo     ^<link rel="stylesheet" href="styles/pricing.css"^>
echo     ^<link rel="stylesheet" href="styles/global.css"^>
echo ^</head^>
echo ^<body^>
echo     ^<header^>
echo         ^<nav^>
echo             ^<a href="index.html"^>Home^</a^>
echo             ^<a href="content-generation.html"^>Generate Content^</a^>
echo             ^<a href="pricing.html"^>Pricing^</a^>
echo             ^<a href="about.html"^>About^</a^>
echo             ^<a href="contact.html"^>Contact^</a^>
echo         ^</nav^>
echo     ^</header^>
echo     ^<main^>
echo         ^<!-- Pricing content will go here --^>
echo     ^</main^>
echo     ^<footer^>
echo         ^<p^>© 2025 GrowAI. All rights reserved.^</p^>
echo         ^<p^>^<a href="mailto:info@growai.it"^>Contact Us^</a^> ^| ^<a href="https://linkedin.com/company/growai-it"^>LinkedIn^</a^> ^| ^<a href="https://x.com/GrowAI_it"^>X^</a^> ^| ^<a href="https://instagram.com/growai.official"^>Instagram^</a^> ^| ^<a href="https://facebook.com/[YourPage]"^>Facebook^</a^>^</p^>
echo     ^</footer^>
echo     ^<script src="scripts/pricing.js"^>^</script^>
echo     ^<script src="scripts/global.js"^>^</script^>
echo ^</body^>
echo ^</html^>
) > "%ROOT_DIR%\pricing.html"

:: About (about.html)
(
echo ^<!DOCTYPE html^>
echo ^<html lang="en"^>
echo ^<head^>
echo     ^<meta charset="UTF-8"^>
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^>
echo     ^<title^>GrowAI - About^</title^>
echo     ^<link rel="stylesheet" href="styles/about.css"^>
echo     ^<link rel="stylesheet" href="styles/global.css"^>
echo ^</head^>
echo ^<body^>
echo     ^<header^>
echo         ^<nav^>
echo             ^<a href="index.html"^>Home^</a^>
echo             ^<a href="content-generation.html"^>Generate Content^</a^>
echo             ^<a href="pricing.html"^>Pricing^</a^>
echo             ^<a href="about.html"^>About^</a^>
echo             ^<a href="contact.html"^>Contact^</a^>
echo         ^</nav^>
echo     ^</header^>
echo     ^<main^>
echo         ^<!-- About content will go here --^>
echo     ^</main^>
echo     ^<footer^>
echo         ^<p^>© 2025 GrowAI. All rights reserved.^</p^>
echo         ^<p^>^<a href="mailto:info@growai.it"^>Contact Us^</a^> ^| ^<a href="https://linkedin.com/company/growai-it"^>LinkedIn^</a^> ^| ^<a href="https://x.com/GrowAI_it"^>X^</a^> ^| ^<a href="https://instagram.com/growai.official"^>Instagram^</a^> ^| ^<a href="https://facebook.com/[YourPage]"^>Facebook^</a^>^</p^>
echo     ^</footer^>
echo     ^<script src="scripts/about.js"^>^</script^>
echo     ^<script src="scripts/global.js"^>^</script^>
echo ^</body^>
echo ^</html^>
) > "%ROOT_DIR%\about.html"

:: Contact (contact.html)
(
echo ^<!DOCTYPE html^>
echo ^<html lang="en"^>
echo ^<head^>
echo     ^<meta charset="UTF-8"^>
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^>
echo     ^<title^>GrowAI - Contact^</title^>
echo     ^<link rel="stylesheet" href="styles/contact.css"^>
echo     ^<link rel="stylesheet" href="styles/global.css"^>
echo ^</head^>
echo ^<body^>
echo     ^<header^>
echo         ^<nav^>
echo             ^<a href="index.html"^>Home^</a^>
echo             ^<a href="content-generation.html"^>Generate Content^</a^>
echo             ^<a href="pricing.html"^>Pricing^</a^>
echo             ^<a href="about.html"^>About^</a^>
echo             ^<a href="contact.html"^>Contact^</a^>
echo         ^</nav^>
echo     ^</header^>
echo     ^<main^>
echo         ^<!-- Contact content will go here --^>
echo     ^</main^>
echo     ^<footer^>
echo         ^<p^>© 2025 GrowAI. All rights reserved.^</p^>
echo         ^<p^>^<a href="mailto:info@growai.it"^>Contact Us^</a^> ^| ^<a href="https://linkedin.com/company/growai-it"^>LinkedIn^</a^> ^| ^<a href="https://x.com/GrowAI_it"^>X^</a^> ^| ^<a href="https://instagram.com/growai.official"^>Instagram^</a^> ^| ^<a href="https://facebook.com/[YourPage]"^>Facebook^</a^>^</p^>
echo     ^</footer^>
echo     ^<script src="scripts/contact.js"^>^</script^>
echo     ^<script src="scripts/global.js"^>^</script^>
echo ^</body^>
echo ^</html^>
) > "%ROOT_DIR%\contact.html"

:: Create CSS files
echo Creating CSS files...
:: Homepage CSS
(
echo /* homepage.css */
echo /* Add page-specific styles here */
) > "%ROOT_DIR%\styles\homepage.css"

:: Content Generation CSS
(
echo /* content-generation.css */
echo /* Add page-specific styles here */
) > "%ROOT_DIR%\styles\content-generation.css"

:: Pricing CSS
(
echo /* pricing.css */
echo /* Add page-specific styles here */
) > "%ROOT_DIR%\styles\pricing.css"

:: About CSS
(
echo /* about.css */
echo /* Add page-specific styles here */
) > "%ROOT_DIR%\styles\about.css"

:: Contact CSS
(
echo /* contact.css */
echo /* Add page-specific styles here */
) > "%ROOT_DIR%\styles\contact.css"

:: Global CSS
(
echo /* global.css */
echo /* Add shared styles here */
) > "%ROOT_DIR%\styles\global.css"

:: Create JS files
echo Creating JavaScript files...
:: Homepage JS
(
echo // homepage.js
echo // Add page-specific scripts here
) > "%ROOT_DIR%\scripts\homepage.js"

:: Content Generation JS
(
echo // content-generation.js
echo // Add page-specific scripts here
) > "%ROOT_DIR%\scripts\content-generation.js"

:: Pricing JS
(
echo // pricing.js
echo // Add page-specific scripts here
) > "%ROOT_DIR%\scripts\pricing.js"

:: About JS
(
echo // about.js
echo // Add page-specific scripts here
) > "%ROOT_DIR%\scripts\about.js"

:: Contact JS
(
echo // contact.js
echo // Add page-specific scripts here
) > "%ROOT_DIR%\scripts\contact.js"

:: Global JS
(
echo // global.js
echo // Add shared scripts here
) > "%ROOT_DIR%\scripts\global.js"

:: Create placeholder image files
echo Creating placeholder image files...
:: Logo
(
echo Placeholder for logo.jpg
) > "%ROOT_DIR%\images\logo.txt"

:: AI Workflow
(
echo Placeholder for ai-workflow.jpg
) > "%ROOT_DIR%\images\ai-workflow.txt"

:: Testimonial 1
(
echo Placeholder for testimonial-1.jpg
) > "%ROOT_DIR%\images\testimonial-1.txt"

:: Trending Topics
(
echo Placeholder for trending-topics.jpg
) > "%ROOT_DIR%\images\trending-topics.txt"

:: Initialize React app (requires Node.js and npm)
echo Initializing React app...
cd "%ROOT_DIR%\react-app"
npx create-react-app . --use-npm

:: Return to root directory
cd "%ROOT_DIR%"

echo Setup complete! Check C:\nas-share\GrowAI-Website for the new structure and files.
pause
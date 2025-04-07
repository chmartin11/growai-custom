@echo off
cd C:\nas-share\GrowAI-Website\react-app\src

set components=Pricing About Contact Signup Login Checkout Blog

for %%c in (%components%) do (
  echo import React from 'react';>%%c.js
  echo.>>%%c.js
  echo const %%c = () => {>>%%c.js
  echo   return (>>%%c.js
  echo     ^<div^>>>%%c.js
  echo       ^<h1^>%%c Page^</h1^>>>%%c.js
  echo       ^<p^>Content for %%c page goes here.^</p^>>>%%c.js
  echo     ^</div^>>>%%c.js
  echo   );>>%%c.js
  echo };>>%%c.js
  echo.>>%%c.js
  echo export default %%c;>>%%c.js
)
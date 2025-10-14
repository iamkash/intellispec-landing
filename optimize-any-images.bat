@echo off
echo 🚀 Smart Image Optimization Tool
echo.
echo 📋 This tool will optimize ANY images you place in the 'to-optimize' folder
echo.
echo 📁 Instructions:
echo    1. Create a folder called 'to-optimize' in public/images/
echo    2. Place your large images in that folder
echo    3. Run this script
echo    4. Optimized images will be moved to their correct locations
echo.

REM Create to-optimize directory if it doesn't exist
if not exist "public\images\to-optimize" (
    echo 📁 Creating 'to-optimize' folder...
    mkdir "public\images\to-optimize"
    echo ✅ Created: public\images\to-optimize
    echo.
    echo 💡 Place your large images in this folder and run the script again.
    pause
    exit
)

REM Check if there are any images in the to-optimize folder
dir "public\images\to-optimize\*.jpg" >nul 2>&1
if errorlevel 1 (
    dir "public\images\to-optimize\*.png" >nul 2>&1
    if errorlevel 1 (
        dir "public\images\to-optimize\*.jpeg" >nul 2>&1
        if errorlevel 1 (
            echo ⚠️  No images found in public\images\to-optimize\
            echo 💡 Please place your images in that folder and run again.
            pause
            exit
        )
    )
)

echo 🔍 Found images in to-optimize folder. Starting optimization...
echo.

REM Create a temporary script to optimize the found images
echo const sharp = require('sharp'); > temp-optimize.js
echo const fs = require('fs'); >> temp-optimize.js
echo const path = require('path'); >> temp-optimize.js
echo. >> temp-optimize.js
echo async function optimizeFoundImages() { >> temp-optimize.js
echo   const inputDir = path.join(__dirname, 'public/images/to-optimize'); >> temp-optimize.js
echo   const outputDir = path.join(__dirname, 'public/images/optimized'); >> temp-optimize.js
echo   if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true }); >> temp-optimize.js
echo   const files = fs.readdirSync(inputDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f)); >> temp-optimize.js
echo   let totalOriginalSize = 0; >> temp-optimize.js
echo   let totalOptimizedSize = 0; >> temp-optimize.js
echo   for (const file of files) { >> temp-optimize.js
echo     const inputPath = path.join(inputDir, file); >> temp-optimize.js
echo     const outputPath = path.join(outputDir, file); >> temp-optimize.js
echo     const inputBuffer = fs.readFileSync(inputPath); >> temp-optimize.js
echo     const originalSize = inputBuffer.length; >> temp-optimize.js
echo     const ext = path.extname(file).toLowerCase(); >> temp-optimize.js
echo     let sharpInstance = sharp(inputBuffer); >> temp-optimize.js
echo     if (ext === '.png') { >> temp-optimize.js
echo       sharpInstance = sharpInstance.resize(600, 400, { fit: 'cover' }).png({ quality: 85 }); >> temp-optimize.js
echo     } else { >> temp-optimize.js
echo       sharpInstance = sharpInstance.resize(600, 400, { fit: 'cover' }).jpeg({ quality: 85 }); >> temp-optimize.js
echo     } >> temp-optimize.js
echo     const optimizedBuffer = await sharpInstance.toBuffer(); >> temp-optimize.js
echo     const optimizedSize = optimizedBuffer.length; >> temp-optimize.js
echo     fs.writeFileSync(outputPath, optimizedBuffer); >> temp-optimize.js
echo     const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1); >> temp-optimize.js
echo     console.log(`✅ ${file}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(optimizedSize / 1024 / 1024).toFixed(2)}MB (${reduction}%% reduction)`); >> temp-optimize.js
echo     totalOriginalSize += originalSize; >> temp-optimize.js
echo     totalOptimizedSize += optimizedSize; >> temp-optimize.js
echo   } >> temp-optimize.js
echo   console.log(`\n📊 Total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB → ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB (${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)}%% reduction)`); >> temp-optimize.js
echo } >> temp-optimize.js
echo optimizeFoundImages().catch(console.error); >> temp-optimize.js

REM Run the temporary optimization script
node temp-optimize.js

REM Clean up temporary script
del temp-optimize.js

echo.
echo 📁 Moving optimized images to correct locations...

REM Move optimized images to their correct locations based on filename patterns
for %%f in ("public\images\optimized\*") do (
    set "filename=%%~nf"
    set "ext=%%~xf"
    
    REM Check if it's a logo (contains 'logo' in filename)
    echo %%f | findstr /i "logo" >nul
    if not errorlevel 1 (
        echo ✅ Moving %%f to logos folder...
        if not exist "public\images\logos" mkdir "public\images\logos"
        move "%%f" "public\images\logos\"
    ) else (
        echo ✅ Moving %%f to main images folder...
        move "%%f" "public\images\"
    )
)

echo.
echo 🧹 Cleaning up...
if exist "public\images\to-optimize" rmdir /s /q "public\images\to-optimize"
if exist "public\images\optimized" rmdir /s /q "public\images\optimized"

echo.
echo ✅ Optimization complete!
echo 📁 Optimized images are now in their correct locations:
echo    - Main images: public/images/
echo    - Logos: public/images/logos/
echo.
echo 💡 You can now place more images in a new 'to-optimize' folder and run again.
echo.
pause 
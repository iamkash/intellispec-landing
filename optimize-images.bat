@echo off
echo 🚀 Starting Image Optimization...
echo.
echo 📋 This script will:
echo    1. Optimize images in public/images/
echo    2. Move optimized images to their correct locations
echo    3. Replace original large images with optimized versions
echo.
pause

echo.
echo 🔄 Running optimization...
node scripts/optimize-images.js

echo.
echo 📁 Moving optimized images to correct locations...

REM Create backup directory for original images
if not exist "public\images\backup" mkdir "public\images\backup"

REM Move optimized images to their correct locations
if exist "public\images\optimized\placeholder-industrial-plant.jpg" (
    echo ✅ Moving placeholder-industrial-plant.jpg...
    move "public\images\optimized\placeholder-industrial-plant.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-control-room.jpg" (
    echo ✅ Moving placeholder-control-room.jpg...
    move "public\images\optimized\placeholder-control-room.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-field-operations.jpg" (
    echo ✅ Moving placeholder-field-operations.jpg...
    move "public\images\optimized\placeholder-field-operations.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-quality-control.jpg" (
    echo ✅ Moving placeholder-quality-control.jpg...
    move "public\images\optimized\placeholder-quality-control.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-maintenance.jpg" (
    echo ✅ Moving placeholder-maintenance.jpg...
    move "public\images\optimized\placeholder-maintenance.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-compliance.jpg" (
    echo ✅ Moving placeholder-compliance.jpg...
    move "public\images\optimized\placeholder-compliance.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-analytics.jpg" (
    echo ✅ Moving placeholder-analytics.jpg...
    move "public\images\optimized\placeholder-analytics.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-analytics..jpg" (
    echo ✅ Moving placeholder-analytics..jpg...
    move "public\images\optimized\placeholder-analytics..jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-asset-management.jpg" (
    echo ✅ Moving placeholder-asset-management.jpg...
    move "public\images\optimized\placeholder-asset-management.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-asset-management.JPG" (
    echo ✅ Moving placeholder-asset-management.JPG...
    move "public\images\optimized\placeholder-asset-management.JPG" "public\images\"
)

if exist "public\images\optimized\placeholder-oil-gas.jpg" (
    echo ✅ Moving placeholder-oil-gas.jpg...
    move "public\images\optimized\placeholder-oil-gas.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-chemicals.jpg" (
    echo ✅ Moving placeholder-chemicals.jpg...
    move "public\images\optimized\placeholder-chemicals.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-manufacturing.jpg" (
    echo ✅ Moving placeholder-manufacturing.jpg...
    move "public\images\optimized\placeholder-manufacturing.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-utilities.jpg" (
    echo ✅ Moving placeholder-utilities.jpg...
    move "public\images\optimized\placeholder-utilities.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-mining.jpg" (
    echo ✅ Moving placeholder-mining.jpg...
    move "public\images\optimized\placeholder-mining.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-construction.jpg" (
    echo ✅ Moving placeholder-construction.jpg...
    move "public\images\optimized\placeholder-construction.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-erp-systems.jpg" (
    echo ✅ Moving placeholder-erp-systems.jpg...
    move "public\images\optimized\placeholder-erp-systems.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-scada-systems.jpg" (
    echo ✅ Moving placeholder-scada-systems.jpg...
    move "public\images\optimized\placeholder-scada-systems.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-crm-systems.jpg" (
    echo ✅ Moving placeholder-crm-systems.jpg...
    move "public\images\optimized\placeholder-crm-systems.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-mes-systems.jpg" (
    echo ✅ Moving placeholder-mes-systems.jpg...
    move "public\images\optimized\placeholder-mes-systems.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-iot-devices.jpg" (
    echo ✅ Moving placeholder-iot-devices.jpg...
    move "public\images\optimized\placeholder-iot-devices.jpg" "public\images\"
)

if exist "public\images\optimized\placeholder-api-integration.jpg" (
    echo ✅ Moving placeholder-api-integration.jpg...
    move "public\images\optimized\placeholder-api-integration.jpg" "public\images\"
)

REM Move integration images to integrations directory
if exist "public\images\optimized\integrations\cloud.jpg" (
    echo ✅ Moving cloud.jpg...
    move "public\images\optimized\integrations\cloud.jpg" "public\images\integrations\"
)

if exist "public\images\optimized\integrations\hse.jpg" (
    echo ✅ Moving hse.jpg...
    move "public\images\optimized\integrations\hse.jpg" "public\images\integrations\"
)

if exist "public\images\optimized\integrations\mes.JPG" (
    echo ✅ Moving mes.JPG...
    move "public\images\optimized\integrations\mes.JPG" "public\images\integrations\"
)

if exist "public\images\optimized\integrations\crm.jpg" (
    echo ✅ Moving crm.jpg...
    move "public\images\optimized\integrations\crm.jpg" "public\images\integrations\"
)

if exist "public\images\optimized\integrations\sada.jpg" (
    echo ✅ Moving sada.jpg...
    move "public\images\optimized\integrations\sada.jpg" "public\images\integrations\"
)

if exist "public\images\optimized\integrations\erp.jpg" (
    echo ✅ Moving erp.jpg...
    move "public\images\optimized\integrations\erp.jpg" "public\images\integrations\"
)

REM Move hero images to hero directory
if exist "public\images\optimized\hero\container-cargo-ship-in-the-export-and-import-busi.jpg" (
    echo ✅ Moving container-cargo-ship-in-the-export-and-import-busi.jpg...
    move "public\images\optimized\hero\container-cargo-ship-in-the-export-and-import-busi.jpg" "public\images\hero\"
)

if exist "public\images\optimized\hero\mizushima-industrial-area-in-japan-at-night.jpg" (
    echo ✅ Moving mizushima-industrial-area-in-japan-at-night.jpg...
    move "public\images\optimized\hero\mizushima-industrial-area-in-japan-at-night.jpg" "public\images\hero\"
)

if exist "public\images\optimized\hero\harbor.jpg" (
    echo ✅ Moving harbor.jpg...
    move "public\images\optimized\hero\harbor.jpg" "public\images\hero\"
)

if exist "public\images\optimized\hero\oil-refinery.jpg" (
    echo ✅ Moving oil-refinery.jpg...
    move "public\images\optimized\hero\oil-refinery.jpg" "public\images\hero\"
)

if exist "public\images\optimized\hero\oil-and-gas-refinery-industrial-plant-at-night.jpg" (
    echo ✅ Moving oil-and-gas-refinery-industrial-plant-at-night.jpg...
    move "public\images\optimized\hero\oil-and-gas-refinery-industrial-plant-at-night.jpg" "public\images\hero\"
)

if exist "public\images\optimized\hero\aerial-view-of-busy-industrial-construction-site.jpg" (
    echo ✅ Moving aerial-view-of-busy-industrial-construction-site.jpg...
    move "public\images\optimized\hero\aerial-view-of-busy-industrial-construction-site.jpg" "public\images\hero\"
)

if exist "public\images\optimized\hero\factory-workshop-interior-and-machines-abstract.jpg" (
    echo ✅ Moving factory-workshop-interior-and-machines-abstract.jpg...
    move "public\images\optimized\hero\factory-workshop-interior-and-machines-abstract.jpg" "public\images\hero\"
)

if exist "public\images\optimized\hero\oil-refinery-factory.jpg" (
    echo ✅ Moving oil-refinery-factory.jpg...
    move "public\images\optimized\hero\oil-refinery-factory.jpg" "public\images\hero\"
)

if exist "public\images\optimized\hero\oil-and-gas-refinery-plant-form-industry-zone-aer.jpg" (
    echo ✅ Moving oil-and-gas-refinery-plant-form-industry-zone-aer.jpg...
    move "public\images\optimized\hero\oil-and-gas-refinery-plant-form-industry-zone-aer.jpg" "public\images\hero\"
)

if exist "public\images\optimized\hero\petrochemical-plant.jpg" (
    echo ✅ Moving petrochemical-plant.jpg...
    move "public\images\optimized\hero\petrochemical-plant.jpg" "public\images\hero\"
)

if exist "public\images\optimized\hero\chaotic-refinery-detail-at-night.jpg" (
    echo ✅ Moving chaotic-refinery-detail-at-night.jpg...
    move "public\images\optimized\hero\chaotic-refinery-detail-at-night.jpg" "public\images\hero\"
)

if exist "public\images\optimized\hero\to-kwa-wan-hong-kong-29-november.jpg" (
    echo ✅ Moving to-kwa-wan-hong-kong-29-november.jpg...
    move "public\images\optimized\hero\to-kwa-wan-hong-kong-29-november.jpg" "public\images\hero\"
)

if exist "public\images\optimized\hero\industrial-chemical-factory-detail.jpg" (
    echo ✅ Moving industrial-chemical-factory-detail.jpg...
    move "public\images\optimized\hero\industrial-chemical-factory-detail.jpg" "public\images\hero\"
)

REM Move industry images to industries directory
if exist "public\images\optimized\industries\pharma.jpg" (
    echo ✅ Moving pharma.jpg...
    move "public\images\optimized\industries\pharma.jpg" "public\images\industries\"
)

if exist "public\images\optimized\industries\mining.jpg" (
    echo ✅ Moving mining.jpg...
    move "public\images\optimized\industries\mining.jpg" "public\images\industries\"
)

if exist "public\images\optimized\industries\power.jpg" (
    echo ✅ Moving power.jpg...
    move "public\images\optimized\industries\power.jpg" "public\images\industries\"
)

if exist "public\images\optimized\industries\chem.jpg" (
    echo ✅ Moving chem.jpg...
    move "public\images\optimized\industries\chem.jpg" "public\images\industries\"
)

if exist "public\images\optimized\industries\manufacturing.JPG" (
    echo ✅ Moving manufacturing.JPG...
    move "public\images\optimized\industries\manufacturing.JPG" "public\images\industries\"
)

if exist "public\images\optimized\industries\oil.jpg" (
    echo ✅ Moving oil.jpg...
    move "public\images\optimized\industries\oil.jpg" "public\images\industries\"
)

REM Move logo images to logos directory
if exist "public\images\optimized\logos\pk-safety-logo.png" (
    echo ✅ Moving pk-safety-logo.png...
    move "public\images\optimized\logos\pk-safety-logo.png" "public\images\logos\"
)

if exist "public\images\optimized\logos\pk-technology-logo.png" (
    echo ✅ Moving pk-technology-logo.png...
    move "public\images\optimized\logos\pk-technology-logo.png" "public\images\logos\"
)

if exist "public\images\optimized\logos\sherwin-williams-logo.png" (
    echo ✅ Moving sherwin-williams-logo.png...
    move "public\images\optimized\logos\sherwin-williams-logo.png" "public\images\logos\"
)

if exist "public\images\optimized\logos\international-paint-logo.png" (
    echo ✅ Moving international-paint-logo.png...
    move "public\images\optimized\logos\international-paint-logo.png" "public\images\logos\"
)

if exist "public\images\optimized\logos\akzonobel-logo.png" (
    echo ✅ Moving akzonobel-logo.png...
    move "public\images\optimized\logos\akzonobel-logo.png" "public\images\logos\"
)

if exist "public\images\optimized\logos\chs-logo.png" (
    echo ✅ Moving chs-logo.png...
    move "public\images\optimized\logos\chs-logo.png" "public\images\logos\"
)

if exist "public\images\optimized\logos\lyondell-bassel-logo.png" (
    echo ✅ Moving lyondell-bassel-logo.png...
    move "public\images\optimized\logos\lyondell-bassel-logo.png" "public\images\logos\"
)

if exist "public\images\optimized\logos\prosurve-logo.png" (
    echo ✅ Moving prosurve-logo.png...
    move "public\images\optimized\logos\prosurve-logo.png" "public\images\logos\"
)

if exist "public\images\optimized\logos\steelmation-logo.png" (
    echo ✅ Moving steelmation-logo.png...
    move "public\images\optimized\logos\steelmation-logo.png" "public\images\logos\"
)

if exist "public\images\optimized\logos\valkyrie-logo.png" (
    echo ✅ Moving valkyrie-logo.png...
    move "public\images\optimized\logos\valkyrie-logo.png" "public\images\logos\"
)

if exist "public\images\optimized\logos\anadarko-logo.png" (
    echo ✅ Moving anadarko-logo.png...
    move "public\images\optimized\logos\anadarko-logo.png" "public\images\logos\"
)

if exist "public\images\optimized\logos\chevron-gom-logo.png" (
    echo ✅ Moving chevron-gom-logo.png...
    move "public\images\optimized\logos\chevron-gom-logo.png" "public\images\logos\"
)

if exist "public\images\optimized\logos\basf-logo.png" (
    echo ✅ Moving basf-logo.png...
    move "public\images\optimized\logos\basf-logo.png" "public\images\logos\"
)

if exist "public\images\optimized\logos\bp-logo.png" (
    echo ✅ Moving bp-logo.png...
    move "public\images\optimized\logos\bp-logo.png" "public\images\logos\"
)

if exist "public\images\optimized\logos\chevron-pascagoula-logo.png" (
    echo ✅ Moving chevron-pascagoula-logo.png...
    move "public\images\optimized\logos\chevron-pascagoula-logo.png" "public\images\logos\"
)

REM Move module images to modules directory
if exist "public\images\optimized\modules\inspect.jpg" (
    echo ✅ Moving inspect.jpg...
    move "public\images\optimized\modules\inspect.jpg" "public\images\modules\"
)

if exist "public\images\optimized\modules\ndt.jpg" (
    echo ✅ Moving ndt.jpg...
    move "public\images\optimized\modules\ndt.jpg" "public\images\modules\"
)

if exist "public\images\optimized\modules\integrity.jpg" (
    echo ✅ Moving integrity.jpg...
    move "public\images\optimized\modules\integrity.jpg" "public\images\modules\"
)

if exist "public\images\optimized\modules\turn.jpg" (
    echo ✅ Moving turn.jpg...
    move "public\images\optimized\modules\turn.jpg" "public\images\modules\"
)

if exist "public\images\optimized\modules\work.jpg" (
    echo ✅ Moving work.jpg...
    move "public\images\optimized\modules\work.jpg" "public\images\modules\"
)

if exist "public\images\optimized\modules\track.jpg" (
    echo ✅ Moving track.jpg...
    move "public\images\optimized\modules\track.jpg" "public\images\modules\"
)

if exist "public\images\optimized\modules\comply.jpg" (
    echo ✅ Moving comply.jpg...
    move "public\images\optimized\modules\comply.jpg" "public\images\modules\"
)

if exist "public\images\optimized\modules\command.jpg" (
    echo ✅ Moving command.jpg...
    move "public\images\optimized\modules\command.jpg" "public\images\modules\"
)

if exist "public\images\optimized\modules\vault.jpg" (
    echo ✅ Moving vault.jpg...
    move "public\images\optimized\modules\vault.jpg" "public\images\modules\"
)

if exist "public\images\optimized\modules\vision.jpg" (
    echo ✅ Moving vision.jpg...
    move "public\images\optimized\modules\vision.jpg" "public\images\modules\"
)

echo.
echo 🧹 Cleaning up temporary files...
if exist "public\images\optimized" rmdir /s /q "public\images\optimized"

echo.
echo ✅ Optimization complete! 
echo 📁 Optimized images are now in their correct locations:
echo    - Main images: public/images/
echo    - Logos: public/images/logos/
echo.
echo 💡 Original large images have been replaced with optimized versions.
echo.
pause 
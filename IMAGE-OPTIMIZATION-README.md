# Image Optimization Tools for intelliSPEC Landing Page

## 🚀 Two Ways to Optimize Your Images

### **Option 1: Smart Optimization (Recommended)**
**File**: `optimize-any-images.bat`

**How to use:**
1. Double-click `optimize-any-images.bat`
2. It will create a `public/images/to-optimize/` folder
3. Place your large images in that folder
4. Run the script again
5. Optimized images will automatically be placed in the correct locations

**Perfect for:** Any images, regardless of filename

---

### **Option 2: Specific Filename Optimization**
**File**: `optimize-images.bat`

**How to use:**
1. Rename your images to match the expected filenames (see list below)
2. Place them in `public/images/` (logos go in `public/images/logos/`)
3. Double-click `optimize-images.bat`
4. Optimized images will replace the originals

**Expected filenames:**
- `placeholder-industrial-plant.jpg`
- `placeholder-control-room.jpg`
- `placeholder-field-operations.jpg`
- `placeholder-quality-control.jpg`
- `placeholder-maintenance.jpg`
- `placeholder-compliance.jpg`
- `placeholder-analytics.jpg`
- `placeholder-oil-gas.jpg`
- `placeholder-chemicals.jpg`
- `placeholder-manufacturing.jpg`
- `placeholder-utilities.jpg`
- `placeholder-mining.jpg`
- `placeholder-construction.jpg`
- `placeholder-erp-systems.jpg`
- `placeholder-scada-systems.jpg`
- `placeholder-crm-systems.jpg`
- `placeholder-mes-systems.jpg`
- `placeholder-iot-devices.jpg`
- `placeholder-api-integration.jpg`

**Logo filenames:**
- `pk-safety-logo.png`
- `pk-technology-logo.png`
- `sherwin-williams-logo.png`
- `international-paint-logo.png`
- `akzonobel-logo.png`
- `chs-logo.png`
- `lyondell-bassel-logo.png`
- `prosurve-logo.png`
- `steelmation-logo.png`
- `valkyrie-logo.png`
- `anadarko-logo.png`
- `chevron-gom-logo.png`
- `basf-logo.png`
- `bp-logo.png`
- `chevron-pascagoula-logo.png`

---

## 🎯 **Quick Start (Recommended)**

1. **Double-click**: `optimize-any-images.bat`
2. **Place your 20MB images** in the created `to-optimize` folder
3. **Run the script again**
4. **Done!** Your images are optimized and in the right places

---

## 📊 **Expected Results**

Your 20MB images will become:
- **Hero images**: ~50-100KB each
- **Card images**: ~100-150KB each  
- **Logos**: ~20-50KB each
- **Total reduction**: 90-95% smaller!

---

## 🔧 **Troubleshooting**

### **Script not working?**
- Make sure Node.js is installed: `node --version`
- Run: `npm install` to install dependencies

### **Images still too large?**
- The script uses 85% quality for JPEG and PNG
- You can manually adjust quality in the script if needed

### **Need different sizes?**
- Edit the resize dimensions in the script (currently 600x400px)

---

## 💡 **Pro Tips**

1. **Use Option 1** (`optimize-any-images.bat`) for the easiest workflow
2. **Keep original images** as backup before running
3. **Test with one image first** to make sure you're happy with the quality
4. **Run page speed tests** after optimization to see the improvement

---

## 🎉 **Success!**

After optimization, your landing page will:
- Load 10x faster
- Have better Core Web Vitals scores
- Provide better user experience
- Improve SEO rankings 
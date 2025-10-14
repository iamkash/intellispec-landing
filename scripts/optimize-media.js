const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

// Configuration for different image types
const imageConfigs = {
  // Hero images (hero directory)
  'container-cargo-ship-in-the-export-and-import-busi.jpg': { width: 1920, height: 1080, quality: 85 },
  'mizushima-industrial-area-in-japan-at-night.jpg': { width: 1920, height: 1080, quality: 85 },
  'harbor.jpg': { width: 1920, height: 1080, quality: 85 },
  'oil-refinery.jpg': { width: 1920, height: 1080, quality: 85 },
  'oil-and-gas-refinery-industrial-plant-at-night.jpg': { width: 1920, height: 1080, quality: 85 },
  'aerial-view-of-busy-industrial-construction-site.jpg': { width: 1920, height: 1080, quality: 85 },
  'factory-workshop-interior-and-machines-abstract.jpg': { width: 1920, height: 1080, quality: 85 },
  'oil-refinery-factory.jpg': { width: 1920, height: 1080, quality: 85 },
  'oil-and-gas-refinery-plant-form-industry-zone-aer.jpg': { width: 1920, height: 1080, quality: 85 },
  'petrochemical-plant.jpg': { width: 1920, height: 1080, quality: 85 },
  'chaotic-refinery-detail-at-night.jpg': { width: 1920, height: 1080, quality: 85 },
  'to-kwa-wan-hong-kong-29-november.jpg': { width: 1920, height: 1080, quality: 85 },
  'industrial-chemical-factory-detail.jpg': { width: 1920, height: 1080, quality: 85 },
  
  // Hero section images
  'placeholder-industrial-plant.jpg': { width: 400, height: 300, quality: 80 },
  'placeholder-control-room.jpg': { width: 400, height: 300, quality: 80 },
  'placeholder-field-operations.jpg': { width: 400, height: 300, quality: 80 },
  
  // Solution section images
  'placeholder-field-operations.jpg': { width: 600, height: 400, quality: 85 },
  'placeholder-quality-control.jpg': { width: 600, height: 400, quality: 85 },
  'placeholder-maintenance.jpg': { width: 600, height: 400, quality: 85 },
  'placeholder-compliance.jpg': { width: 600, height: 400, quality: 85 },
  'placeholder-analytics.jpg': { width: 600, height: 400, quality: 85 },
  'placeholder-analytics..jpg': { width: 600, height: 400, quality: 85 },
  'placeholder-asset-management.jpg': { width: 600, height: 400, quality: 85 },
  'placeholder-asset-management.JPG': { width: 600, height: 400, quality: 85 },
  
  // Industry section images
  'placeholder-oil-gas.jpg': { width: 600, height: 400, quality: 85 },
  'placeholder-chemicals.jpg': { width: 600, height: 400, quality: 85 },
  'placeholder-manufacturing.jpg': { width: 600, height: 400, quality: 85 },
  'placeholder-utilities.jpg': { width: 600, height: 400, quality: 85 },
  'placeholder-mining.jpg': { width: 600, height: 400, quality: 85 },
  'placeholder-construction.jpg': { width: 600, height: 400, quality: 85 },
  
  // Industry images (industries directory)
  'pharma.jpg': { width: 600, height: 400, quality: 85 },
  'mining.jpg': { width: 600, height: 400, quality: 85 },
  'power.jpg': { width: 600, height: 400, quality: 85 },
  'chem.jpg': { width: 600, height: 400, quality: 85 },
  'manufacturing.JPG': { width: 600, height: 400, quality: 85 },
  'oil.jpg': { width: 600, height: 400, quality: 85 },
  
  // Interoperability section images
  'placeholder-erp-systems.jpg': { width: 600, height: 400, quality: 85 },
  'placeholder-scada-systems.jpg': { width: 600, height: 400, quality: 85 },
  'placeholder-crm-systems.jpg': { width: 600, height: 400, quality: 85 },
  'placeholder-mes-systems.jpg': { width: 600, height: 400, quality: 85 },
  'placeholder-iot-devices.jpg': { width: 600, height: 400, quality: 85 },
  'placeholder-api-integration.jpg': { width: 600, height: 400, quality: 85 },
  
  // Integration images (integrations directory)
  'cloud.jpg': { width: 600, height: 400, quality: 85 },
  'hse.jpg': { width: 600, height: 400, quality: 85 },
  'mes.JPG': { width: 600, height: 400, quality: 85 },
  'crm.jpg': { width: 600, height: 400, quality: 85 },
  'sada.jpg': { width: 600, height: 400, quality: 85 },
  'erp.jpg': { width: 600, height: 400, quality: 85 },
  
  // Logo images (logos directory)
  'pk-safety-logo.png': { width: 240, height: 120, quality: 90 },
  'pk-technology-logo.png': { width: 240, height: 120, quality: 90 },
  'sherwin-williams-logo.png': { width: 240, height: 120, quality: 90 },
  'international-paint-logo.png': { width: 240, height: 120, quality: 90 },
  'akzonobel-logo.png': { width: 240, height: 120, quality: 90 },
  'chs-logo.png': { width: 240, height: 120, quality: 90 },
  'lyondell-bassel-logo.png': { width: 240, height: 120, quality: 90 },
  'prosurve-logo.png': { width: 240, height: 120, quality: 90 },
  'steelmation-logo.png': { width: 240, height: 120, quality: 90 },
  'valkyrie-logo.png': { width: 240, height: 120, quality: 90 },
  'anadarko-logo.png': { width: 240, height: 120, quality: 90 },
  'chevron-gom-logo.png': { width: 240, height: 120, quality: 90 },
  'basf-logo.png': { width: 240, height: 120, quality: 90 },
  'bp-logo.png': { width: 240, height: 120, quality: 90 },
  'chevron-pascagoula-logo.png': { width: 240, height: 120, quality: 90 },
  
  // Module images (modules directory)
  'inspect.jpg': { width: 600, height: 400, quality: 85 },
  'ndt.jpg': { width: 600, height: 400, quality: 85 },
  'integrity.jpg': { width: 600, height: 400, quality: 85 },
  'turn.jpg': { width: 600, height: 400, quality: 85 },
  'work.jpg': { width: 600, height: 400, quality: 85 },
  'track.jpg': { width: 600, height: 400, quality: 85 },
  'comply.jpg': { width: 600, height: 400, quality: 85 },
  'command.jpg': { width: 600, height: 400, quality: 85 },
  'vault.jpg': { width: 600, height: 400, quality: 85 },
  'vision.jpg': { width: 600, height: 400, quality: 85 }
};

// Configuration for different video types
const videoConfigs = {
  // Hero videos (hero directory)
  'hero-demo.mp4': { 
    width: 1920, 
    height: 1080, 
    bitrate: '2M', 
    fps: 30,
    codec: 'libx264',
    preset: 'medium',
    crf: 23
  },
  'platform-overview.mp4': { 
    width: 1920, 
    height: 1080, 
    bitrate: '2M', 
    fps: 30,
    codec: 'libx264',
    preset: 'medium',
    crf: 23
  },
  'product-demo.mp4': { 
    width: 1280, 
    height: 720, 
    bitrate: '1.5M', 
    fps: 30,
    codec: 'libx264',
    preset: 'medium',
    crf: 23
  },
  'testimonial.mp4': { 
    width: 1280, 
    height: 720, 
    bitrate: '1M', 
    fps: 30,
    codec: 'libx264',
    preset: 'medium',
    crf: 23
  },
  'background-loop.mp4': { 
    width: 1920, 
    height: 1080, 
    bitrate: '1M', 
    fps: 24,
    codec: 'libx264',
    preset: 'fast',
    crf: 28
  }
};

// Supported video formats
const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv', '.webm', '.flv', '.wmv', '.m4v'];

// Supported image formats
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.bmp', '.tiff'];

async function optimizeImage(inputPath, outputPath, config) {
  try {
    const inputBuffer = fs.readFileSync(inputPath);
    const originalSize = inputBuffer.length;
    
    let sharpInstance = sharp(inputBuffer);
    
    // Resize if dimensions are specified
    if (config.width && config.height) {
      sharpInstance = sharpInstance.resize(config.width, config.height, {
        fit: 'cover',
        position: 'center'
      });
    }
    
    // Determine output format and quality
    const ext = path.extname(inputPath).toLowerCase();
    if (ext === '.png') {
      sharpInstance = sharpInstance.png({ quality: config.quality });
    } else {
      sharpInstance = sharpInstance.jpeg({ quality: config.quality });
    }
    
    const optimizedBuffer = await sharpInstance.toBuffer();
    const optimizedSize = optimizedBuffer.length;
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    // Write optimized image
    fs.writeFileSync(outputPath, optimizedBuffer);
    
    console.log(`✅ ${path.basename(inputPath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(optimizedSize / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);
    
    return { originalSize, optimizedSize, reduction };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function optimizeVideo(inputPath, outputPath, config) {
  try {
    const originalSize = fs.statSync(inputPath).size;
    
    // Build ffmpeg command
    const ffmpegArgs = [
      '-i', `"${inputPath}"`,
      '-c:v', config.codec || 'libx264',
      '-preset', config.preset || 'medium',
      '-crf', config.crf || '23',
      '-b:v', config.bitrate || '2M',
      '-r', config.fps || '30'
    ];
    
    // Add resize if dimensions are specified
    if (config.width && config.height) {
      ffmpegArgs.push('-vf', `scale=${config.width}:${config.height}`);
    }
    
    // Add audio codec
    ffmpegArgs.push('-c:a', 'aac', '-b:a', '128k');
    
    // Output file
    ffmpegArgs.push('-y', `"${outputPath}"`);
    
    const command = `ffmpeg ${ffmpegArgs.join(' ')}`;
    
    console.log(`🔄 Optimizing ${path.basename(inputPath)}...`);
    
    const { stdout, stderr } = await execAsync(command);
    
    if (fs.existsSync(outputPath)) {
      const optimizedSize = fs.statSync(outputPath).size;
      const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      
      console.log(`✅ ${path.basename(inputPath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(optimizedSize / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);
      
      return { originalSize, optimizedSize, reduction };
    } else {
      console.error(`❌ Failed to create optimized video: ${outputPath}`);
      return null;
    }
  } catch (error) {
    console.error(`❌ Error optimizing video ${inputPath}:`, error.message);
    return null;
  }
}

async function checkFfmpeg() {
  try {
    await execAsync('ffmpeg -version');
    return true;
  } catch (error) {
    console.error('❌ FFmpeg not found. Please install FFmpeg to optimize videos.');
    console.log('📥 Download FFmpeg from: https://ffmpeg.org/download.html');
    return false;
  }
}

async function optimizeAllMedia() {
  console.log('🚀 Starting media optimization...\n');
  
  const inputDir = path.join(__dirname, '../public');
  const outputDir = path.join(__dirname, '../public/optimized');
  
  // Check if ffmpeg is available
  const ffmpegAvailable = await checkFfmpeg();
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Create subdirectories
  const subdirs = ['images', 'videos', 'images/logos', 'images/integrations', 'images/industries', 'images/hero', 'images/modules'];
  for (const subdir of subdirs) {
    const fullPath = path.join(outputDir, subdir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  }
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let processedImages = 0;
  let processedVideos = 0;
  
  // Process images
  console.log('📸 Processing images...\n');
  for (const [filename, config] of Object.entries(imageConfigs)) {
    const isLogo = filename.includes('logo');
    const isIntegration = ['cloud.jpg', 'hse.jpg', 'mes.JPG', 'crm.jpg', 'sada.jpg', 'erp.jpg'].includes(filename);
    const isIndustry = ['pharma.jpg', 'mining.jpg', 'power.jpg', 'chem.jpg', 'manufacturing.JPG', 'oil.jpg'].includes(filename);
    const isHero = ['container-cargo-ship-in-the-export-and-import-busi.jpg', 'mizushima-industrial-area-in-japan-at-night.jpg', 'harbor.jpg', 'oil-refinery.jpg', 'oil-and-gas-refinery-industrial-plant-at-night.jpg', 'aerial-view-of-busy-industrial-construction-site.jpg', 'factory-workshop-interior-and-machines-abstract.jpg', 'oil-refinery-factory.jpg', 'oil-and-gas-refinery-plant-form-industry-zone-aer.jpg', 'petrochemical-plant.jpg', 'chaotic-refinery-detail-at-night.jpg', 'to-kwa-wan-hong-kong-29-november.jpg', 'industrial-chemical-factory-detail.jpg'].includes(filename);
    const isModule = ['inspect.jpg', 'ndt.jpg', 'integrity.jpg', 'turn.jpg', 'work.jpg', 'track.jpg', 'comply.jpg', 'command.jpg', 'vault.jpg', 'vision.jpg'].includes(filename);
    
    const inputPath = isLogo 
      ? path.join(inputDir, 'images/logos', filename)
      : isIntegration
      ? path.join(inputDir, 'images/integrations', filename)
      : isIndustry
      ? path.join(inputDir, 'images/industries', filename)
      : isHero
      ? path.join(inputDir, 'images/hero', filename)
      : isModule
      ? path.join(inputDir, 'images/modules', filename)
      : path.join(inputDir, 'images', filename);
    
    const outputPath = isLogo
      ? path.join(outputDir, 'images/logos', filename)
      : isIntegration
      ? path.join(outputDir, 'images/integrations', filename)
      : isIndustry
      ? path.join(outputDir, 'images/industries', filename)
      : isHero
      ? path.join(outputDir, 'images/hero', filename)
      : isModule
      ? path.join(outputDir, 'images/modules', filename)
      : path.join(outputDir, 'images', filename);
    
    if (fs.existsSync(inputPath)) {
      const result = await optimizeImage(inputPath, outputPath, config);
      if (result) {
        totalOriginalSize += result.originalSize;
        totalOptimizedSize += result.optimizedSize;
        processedImages++;
      }
    } else {
      console.log(`⚠️  Image file not found: ${inputPath}`);
    }
  }
  
  // Process videos if ffmpeg is available
  if (ffmpegAvailable) {
    console.log('\n🎥 Processing videos...\n');
    for (const [filename, config] of Object.entries(videoConfigs)) {
      const inputPath = path.join(inputDir, 'videos', filename);
      const outputPath = path.join(outputDir, 'videos', filename);
      
      if (fs.existsSync(inputPath)) {
        const result = await optimizeVideo(inputPath, outputPath, config);
        if (result) {
          totalOriginalSize += result.originalSize;
          totalOptimizedSize += result.optimizedSize;
          processedVideos++;
        }
      } else {
        console.log(`⚠️  Video file not found: ${inputPath}`);
      }
    }
  }
  
  // Summary
  console.log('\n📊 Optimization Summary:');
  console.log(`Processed images: ${processedImages}`);
  console.log(`Processed videos: ${processedVideos}`);
  console.log(`Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total optimized size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total reduction: ${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)}%`);
  console.log(`\n✅ Optimized media saved to: ${outputDir}`);
  
  if (!ffmpegAvailable) {
    console.log('\n💡 Tip: Install FFmpeg to enable video optimization');
  }
}

// Run the optimization
optimizeAllMedia().catch(console.error); 
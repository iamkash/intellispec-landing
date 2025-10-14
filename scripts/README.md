# Media Optimization Scripts

This directory contains scripts for optimizing images and videos in the project.

## Scripts

### 1. `optimize-images.js` (Original)
- **Purpose**: Optimizes only images using Sharp
- **Usage**: `npm run optimize-images`
- **Features**: 
  - Resizes images to specified dimensions
  - Compresses with quality settings
  - Maintains directory structure
  - Supports JPG, PNG, WebP formats

### 2. `optimize-media.js` (Enhanced)
- **Purpose**: Optimizes both images AND videos
- **Usage**: `npm run optimize-media`
- **Features**:
  - All image optimization features from the original script
  - Video optimization using FFmpeg
  - Configurable video settings (bitrate, resolution, codec)
  - Automatic FFmpeg detection and fallback

## Video Optimization Requirements

### FFmpeg Installation

The video optimization feature requires FFmpeg to be installed on your system:

#### Windows
1. Download from: https://ffmpeg.org/download.html
2. Extract to a folder (e.g., `C:\ffmpeg`)
3. Add to PATH environment variable
4. Restart terminal/command prompt

#### macOS
```bash
# Using Homebrew
brew install ffmpeg

# Using MacPorts
sudo port install ffmpeg
```

#### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install ffmpeg
```

#### Linux (CentOS/RHEL)
```bash
sudo yum install ffmpeg
# or
sudo dnf install ffmpeg
```

## Configuration

### Image Configuration

Images are configured in the `imageConfigs` object with settings for:
- `width`: Target width in pixels
- `height`: Target height in pixels  
- `quality`: JPEG/PNG quality (0-100)

### Video Configuration

Videos are configured in the `videoConfigs` object with settings for:
- `width`: Target width in pixels
- `height`: Target height in pixels
- `bitrate`: Video bitrate (e.g., '2M', '1.5M')
- `fps`: Frames per second
- `codec`: Video codec (default: 'libx264')
- `preset`: Encoding preset (default: 'medium')
- `crf`: Constant Rate Factor (default: 23)

## Usage Examples

### Optimize Images Only
```bash
npm run optimize-images
```

### Optimize Images and Videos
```bash
npm run optimize-media
```

### Direct Script Execution
```bash
# Images only
node scripts/optimize-images.js

# Images and videos
node scripts/optimize-media.js
```

## Output Structure

Optimized files are saved to `public/optimized/` with the following structure:

```
public/optimized/
├── images/
│   ├── logos/
│   ├── integrations/
│   ├── industries/
│   ├── hero/
│   └── modules/
└── videos/
```

## Supported Formats

### Images
- JPG/JPEG
- PNG
- WebP
- GIF
- BMP
- TIFF

### Videos
- MP4
- AVI
- MOV
- MKV
- WebM
- FLV
- WMV
- M4V

## Performance Tips

### For Large Video Files
- Use `preset: 'fast'` for quicker processing
- Lower `crf` values (18-23) for better quality
- Higher `crf` values (28-35) for smaller file sizes

### For Web Optimization
- Use WebM format for better web compatibility
- Keep bitrates reasonable (1-2M for 1080p)
- Consider multiple resolutions for responsive design

## Troubleshooting

### FFmpeg Not Found
If you see "FFmpeg not found" error:
1. Verify FFmpeg is installed: `ffmpeg -version`
2. Check if it's in your PATH
3. Restart your terminal after installation

### Permission Errors
- On Windows: Run as Administrator
- On Linux/macOS: Use `sudo` if needed

### Memory Issues
- Process videos one at a time for large files
- Close other applications to free up memory
- Use lower resolution settings for very large videos

## Customization

### Adding New Image Types
Add entries to `imageConfigs`:
```javascript
'new-image.jpg': { width: 800, height: 600, quality: 85 }
```

### Adding New Video Types
Add entries to `videoConfigs`:
```javascript
'new-video.mp4': { 
  width: 1920, 
  height: 1080, 
  bitrate: '2M', 
  fps: 30,
  codec: 'libx264',
  preset: 'medium',
  crf: 23
}
```

### Custom FFmpeg Settings
Modify the `optimizeVideo` function to add custom FFmpeg arguments:
```javascript
ffmpegArgs.push('-vf', 'scale=1920:1080:force_original_aspect_ratio=decrease');
``` 
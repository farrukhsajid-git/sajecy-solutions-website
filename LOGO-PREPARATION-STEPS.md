# Logo Preparation Steps

## Quick Start: How to Prepare Your Logo

### Current Logo File
Location: `/Users/farrukh/Desktop/Screenshot 2025-10-20 at 12.11.42 AM.png`

### What You Need to Do

#### Option 1: Using Preview (Mac Built-in)

1. **Open the screenshot**:
   ```
   Open: Screenshot 2025-10-20 at 12.11.42 AM.png
   ```

2. **Crop to the logo only**:
   - Click Tools > Rectangular Selection
   - Draw a square around just the SS logo
   - Crop to selection (Cmd + K)

3. **Export as PNG**:
   - File > Export
   - Format: PNG
   - Save As: `sajecy-logo.png`
   - Location: `/Users/farrukh/Desktop/Sajecy Solutions/Alternate website/images/`

#### Option 2: Using Online Tool

1. **Visit**: https://www.iloveimg.com/crop-image
2. **Upload**: Your screenshot
3. **Crop**: Square selection around the logo
4. **Download**: As PNG
5. **Rename**: To `sajecy-logo.png`
6. **Move**: To `images/` folder in your website

#### Option 3: Quick Terminal Command (Mac/Linux)

If ImageMagick is installed:
```bash
# Navigate to Desktop
cd ~/Desktop

# Convert and crop (adjust coordinates as needed)
convert "Screenshot 2025-10-20 at 12.11.42 AM.png" \
  -gravity center \
  -crop 300x300+0+0 \
  -resize 512x512 \
  "Sajecy Solutions/Alternate website/images/sajecy-logo.png"
```

---

## Recommended Final Specifications

### File Format & Size
```
Format: PNG with transparency
Dimensions: 512x512 pixels (will be scaled by CSS)
File Size: Target < 50KB
Color Mode: RGB
Bit Depth: 24-bit (8 bits per channel)
Background: Transparent (or white if that's the logo design)
```

### Why These Specs?
- **512x512**: High enough for Retina displays, not too large
- **PNG**: Supports transparency, good for logos
- **< 50KB**: Fast loading time
- **Square**: Easier to scale uniformly

---

## After Placing the Logo

### Test Checklist

1. **View the page**: Open `/Users/farrukh/Desktop/Sajecy Solutions/Alternate website/index.html`

2. **Check logo appears**: Top left of navigation

3. **Check sizing**:
   - Desktop: Logo should be ~44px
   - Mobile: Logo should be ~36px
   - Text should be next to logo

4. **Check hover effect**:
   - Hover over logo
   - Should scale slightly and rotate 2 degrees
   - Smooth transition

5. **Check mobile**:
   - Resize browser to <640px width
   - Logo should shrink appropriately
   - Still readable and clickable

---

## Alternative: Use the Logo as SVG

If you can convert to SVG (recommended for best quality):

### Benefits of SVG:
- Infinitely scalable (no blur)
- Smaller file size (usually)
- Can be styled with CSS
- Better for responsive design

### How to Convert to SVG:

**Option 1: Online Converter**
1. Visit: https://www.pngtosvg.com/
2. Upload your logo PNG
3. Download as SVG
4. Save as `sajecy-logo.svg` in images folder
5. Update HTML to use `.svg` instead of `.png`

**Option 2: Professional Tool**
1. Open in Adobe Illustrator
2. Image Trace (for automatic conversion)
3. Export as SVG
4. Save to images folder

---

## If Logo File is Too Large

### Optimization Tools:

**TinyPNG** (Online)
- Visit: https://tinypng.com/
- Upload your logo
- Download optimized version
- Can reduce size by 50-70%

**ImageOptim** (Mac App)
- Free app for Mac
- Drag and drop logo
- Automatic optimization
- Lossless compression

**Command Line** (if you have tools installed):
```bash
# Using pngquant
pngquant --quality=65-80 sajecy-logo.png -o sajecy-logo-optimized.png

# Using optipng
optipng -o7 sajecy-logo.png
```

---

## Expected File Path

After preparation, your logo should be at:
```
/Users/farrukh/Desktop/Sajecy Solutions/Alternate website/images/sajecy-logo.png
```

The HTML is already configured to look for it at:
```html
<img src="images/sajecy-logo.png" ... >
```

---

## Quick Verification

Once file is in place:

1. Open Terminal
2. Run:
```bash
ls -lh "/Users/farrukh/Desktop/Sajecy Solutions/Alternate website/images/sajecy-logo.png"
```

3. Should see file size (target < 50KB)

4. To view:
```bash
open "/Users/farrukh/Desktop/Sajecy Solutions/Alternate website/images/sajecy-logo.png"
```

---

## Need Help?

If you encounter any issues:
1. Verify the file path is correct
2. Check file permissions (should be readable)
3. Ensure file extension is lowercase `.png`
4. Try clearing browser cache and reloading

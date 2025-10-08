#!/bin/bash

# Icon Generator Script for joaovitorscr.com
# Generates all necessary PNG icons from SVG source

set -e

echo "🎨 Generating icons from SVG..."
echo ""

# Check if rsvg-convert is available (preferred for gradients)
if command -v rsvg-convert &> /dev/null; then
    echo "✅ Using rsvg-convert (better gradient support)"
    USE_RSVG=true
else
    echo "⚠️  rsvg-convert not found, falling back to ImageMagick"
    USE_RSVG=false
    
    # Check if ImageMagick is installed
    if ! command -v convert &> /dev/null && ! command -v magick &> /dev/null; then
        echo "❌ Error: Neither rsvg-convert nor ImageMagick found!"
        echo "Install with: sudo apt-get install librsvg2-bin (Linux) or brew install librsvg (macOS)"
        exit 1
    fi
    
    # Determine which command to use
    if command -v magick &> /dev/null; then
        CONVERT_CMD="magick"
    else
        CONVERT_CMD="convert"
    fi
fi

# Create public directory if it doesn't exist
mkdir -p public

cd public

# Generate regular icons from icon.svg with proper color rendering
if [ "$USE_RSVG" = true ]; then
    echo "📦 Generating icon-192.png..."
    rsvg-convert -w 192 -h 192 icon.svg -o icon-192.png
    
    echo "📦 Generating icon-512.png..."
    rsvg-convert -w 512 -h 512 icon.svg -o icon-512.png
    
    echo "📦 Generating apple-icon.png (180x180)..."
    rsvg-convert -w 180 -h 180 icon.svg -o apple-icon.png
    
    # Generate maskable icons (no rounded corners)
    echo "📦 Generating icon-192-maskable.png..."
    rsvg-convert -w 192 -h 192 icon.svg -o icon-192-maskable.png
    
    echo "📦 Generating icon-512-maskable.png..."
    rsvg-convert -w 512 -h 512 icon.svg -o icon-512-maskable.png
else
    echo "📦 Generating icon-192.png..."
    $CONVERT_CMD -density 300 icon.svg -background none -colorspace sRGB -resize 192x192 -alpha on PNG32:icon-192.png
    
    echo "📦 Generating icon-512.png..."
    $CONVERT_CMD -density 300 icon.svg -background none -colorspace sRGB -resize 512x512 -alpha on PNG32:icon-512.png
    
    echo "📦 Generating apple-icon.png (180x180)..."
    $CONVERT_CMD -density 300 icon.svg -background none -colorspace sRGB -resize 180x180 -alpha on PNG32:apple-icon.png
    
    # Generate maskable icons (no rounded corners)
    echo "📦 Generating icon-192-maskable.png..."
    $CONVERT_CMD -density 300 icon.svg -background none -colorspace sRGB -resize 192x192 -alpha on PNG32:icon-192-maskable.png
    
    echo "📦 Generating icon-512-maskable.png..."
    $CONVERT_CMD -density 300 icon.svg -background none -colorspace sRGB -resize 512x512 -alpha on PNG32:icon-512-maskable.png
fi

# Generate favicon.ico (requires ImageMagick)
if [ "$USE_RSVG" = true ]; then
    echo "📦 Generating favicon.ico..."
    # Generate temp PNGs then combine into ICO
    rsvg-convert -w 16 -h 16 favicon.svg -o /tmp/favicon-16.png
    rsvg-convert -w 32 -h 32 favicon.svg -o /tmp/favicon-32.png
    rsvg-convert -w 48 -h 48 favicon.svg -o /tmp/favicon-48.png
    
    if command -v magick &> /dev/null; then
        magick /tmp/favicon-16.png /tmp/favicon-32.png /tmp/favicon-48.png favicon.ico
    elif command -v convert &> /dev/null; then
        convert /tmp/favicon-16.png /tmp/favicon-32.png /tmp/favicon-48.png favicon.ico
    else
        echo "⚠️  Skipping favicon.ico (ImageMagick needed for ICO format)"
    fi
    
    rm -f /tmp/favicon-*.png
else
    echo "📦 Generating favicon.ico..."
    $CONVERT_CMD favicon.svg -define icon:auto-resize=16,32,48 favicon.ico
fi

cd ..

echo ""
echo "✅ All icons generated successfully!"
echo ""
echo "Generated files in /public:"
echo "  - icon-192.png"
echo "  - icon-512.png"
echo "  - apple-icon.png"
echo "  - icon-192-maskable.png"
echo "  - icon-512-maskable.png"
echo "  - favicon.ico"
echo ""
echo "🚀 Your icons are ready to use!"


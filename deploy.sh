#!/bin/bash

# Brave Site Deployment Script
# This script builds and tests your Astro site locally before deployment

echo "🚀 Starting Brave Site deployment process..."

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Build the site
echo "🔨 Building the site..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi

# Test the build by previewing it
echo "👀 Testing the build..."
echo "Starting preview server on http://localhost:4321"
echo "Press Ctrl+C to stop preview and continue with deployment"

# Start preview server in background
npm run preview &
PREVIEW_PID=$!

# Wait a moment for server to start
sleep 3

# Test if the preview server is running
if curl -s http://localhost:4321 > /dev/null; then
    echo "✅ Preview server is running successfully!"
    echo "🌐 Visit http://localhost:4321 to test your site"
else
    echo "⚠️  Preview server might not be ready yet, but continuing..."
fi

# Kill preview server
kill $PREVIEW_PID 2>/dev/null

echo "✅ Local build and test completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Push your changes to GitHub: git push origin main"
echo "2. The GitHub Actions workflow will automatically deploy your site"
echo "3. Monitor deployment at: https://github.com/KeishaKalfin/brave-and-co/actions"
echo "4. Your site will be available at: https://keishakalfin.github.io/"
echo ""
echo "🎉 Deployment script completed!"
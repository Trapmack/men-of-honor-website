#!/bin/bash

# Men of Honor Website - Quick Deployment Script
# This script builds and deploys the website to various hosting platforms

echo "🛡️  Men of Honor Website - Deployment Script"
echo "============================================="

# Build the site
echo "📦 Building production version..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🌐 Choose deployment option:"
    echo "1. Netlify (Drag & Drop)"
    echo "2. Surge.sh (Command Line)"
    echo "3. GitHub Pages setup"
    echo "4. Just build (manual deployment)"
    echo ""
    
    read -p "Enter your choice (1-4): " choice
    
    case $choice in
        1)
            echo "📁 Opening dist folder for drag & drop to Netlify..."
            echo "🌐 Go to https://www.netlify.com/"
            echo "📂 Drag the 'dist' folder to deploy"
            open dist
            ;;
        2)
            echo "🚀 Deploying to Surge.sh..."
            if command -v surge &> /dev/null; then
                surge dist
            else
                echo "Installing surge..."
                npm install -g surge
                surge dist
            fi
            ;;
        3)
            echo "📚 GitHub Pages setup instructions:"
            echo "1. Push to GitHub:"
            echo "   git remote add origin https://github.com/YOUR-USERNAME/men-of-honor-website.git"
            echo "   git push -u origin main"
            echo "2. Enable GitHub Pages in repository settings"
            echo "3. Use GitHub Actions for deployment"
            ;;
        4)
            echo "📁 Build complete! Deploy the 'dist' folder to your hosting service."
            echo "🌐 The website is ready for deployment!"
            ;;
        *)
            echo "❌ Invalid choice. Build is complete - deploy manually."
            ;;
    esac
    
    echo ""
    echo "🎉 Deployment process complete!"
    echo "🔗 Your website will be available at your hosting provider's URL"
    
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

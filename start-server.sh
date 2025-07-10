#!/bin/bash

# Men of Honor Website - Production Server Startup Script
# This script builds and runs the website for external access

echo "🛡️  Men of Honor Website - Starting Production Server"
echo "=================================================="

# Build the production version
echo "📦 Building production version..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Start the preview server
    echo "🚀 Starting server for external access..."
    echo "🌐 Server will be available at:"
    echo "   - Local: http://localhost:3000/"
    echo "   - Network: http://$(ifconfig | grep "inet " | grep -v 127.0.0.1 | head -1 | awk '{print $2}'):3000/"
    echo "   - No-IP: http://your-domain.no-ip.com:3000/"
    echo ""
    echo "🔥 Server is running - Press Ctrl+C to stop"
    echo "=================================================="
    
    npm run preview
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

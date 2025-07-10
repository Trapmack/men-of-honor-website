#!/bin/bash

# Netlify Build Diagnostic Script
echo "🔍 Netlify Build Diagnostics"
echo "=========================="

echo "📁 Current directory:"
pwd

echo "📋 Files in root:"
ls -la

echo "📦 Package.json content:"
cat package.json

echo "🔧 Node version:"
node --version

echo "📚 NPM version:"
npm --version

echo "🏗️ Testing build:"
npm run build

echo "📁 Dist folder content:"
ls -la dist/

echo "✅ Build test complete"

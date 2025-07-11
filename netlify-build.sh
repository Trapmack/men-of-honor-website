#!/bin/bash
set -e

echo "Starting Netlify build process..."

# Clean up any existing installations
echo "Cleaning up existing node_modules and package-lock.json..."
rm -rf node_modules package-lock.json

# Install dependencies with fresh package-lock.json
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

echo "Build completed successfully!"

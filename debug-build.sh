#!/bin/bash

# Debug script for Netlify build
echo "=== Build Debug Information ==="
echo "Node.js version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "Current directory: $(pwd)"
echo "Directory contents:"
ls -la

echo -e "\n=== Package.json content ==="
cat package.json

echo -e "\n=== Installing dependencies ==="
npm install --production=false

echo -e "\n=== Node modules installed ==="
ls -la node_modules/ | head -20

echo -e "\n=== Running build ==="
npm run build

echo -e "\n=== Build output ==="
ls -la dist/

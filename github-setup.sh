#!/bin/bash

# GitHub Setup Script for Men of Honor Website
# Run this after creating your GitHub repository

echo "🛡️  Men of Honor Website - GitHub Setup"
echo "======================================"

# Check if repository URL is provided
if [ -z "$1" ]; then
    echo "❌ Please provide your GitHub repository URL"
    echo "Usage: ./github-setup.sh https://github.com/YOUR-USERNAME/men-of-honor-website.git"
    echo ""
    echo "Steps to get your repository URL:"
    echo "1. Go to https://github.com"
    echo "2. Click 'New Repository'"
    echo "3. Name: men-of-honor-website"
    echo "4. Make it Public"
    echo "5. DO NOT initialize with README"
    echo "6. Click 'Create repository'"
    echo "7. Copy the repository URL (ends with .git)"
    exit 1
fi

REPO_URL=$1

echo "📦 Adding GitHub remote..."
git remote add origin $REPO_URL

echo "🔍 Checking git status..."
git status

echo "🚀 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🌐 Next steps for deployment:"
    echo "1. Go to https://www.netlify.com"
    echo "2. Sign up/login with GitHub"
    echo "3. Click 'New site from Git'"
    echo "4. Choose GitHub and select your repository"
    echo "5. Build settings are auto-detected"
    echo "6. Click 'Deploy site'"
    echo ""
    echo "🎉 Your site will be live in 2-3 minutes!"
    echo "🔗 You'll get a URL like: https://amazing-site-123.netlify.app"
else
    echo "❌ Failed to push to GitHub. Please check the error above."
    exit 1
fi

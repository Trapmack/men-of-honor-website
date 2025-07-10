# 🚀 Men of Honor Website - External Hosting Deployment Guide

## 🌐 Hosting Options

### Option 1: Netlify (Recommended - Free & Easy)

#### Method A: Drag & Drop (Quickest)
1. **Build the site**:
   ```bash
   npm run build
   ```
2. **Go to [Netlify](https://www.netlify.com/)**
3. **Sign up/Login** with GitHub, GitLab, or email
4. **Drag the `dist` folder** to the Netlify dashboard
5. **Your site is live!** (gets a random URL like `https://amazing-site-123.netlify.app`)

#### Method B: Git Integration (Best for updates)
1. **Create GitHub repository**:
   - Go to [GitHub](https://github.com)
   - Create new repository: "men-of-honor-website"
   - Don't initialize with README (we already have files)

2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/men-of-honor-website.git
   git push -u origin main
   ```

3. **Deploy on Netlify**:
   - Go to [Netlify](https://www.netlify.com/)
   - Click "New site from Git"
   - Connect GitHub and select your repository
   - Build settings are auto-detected from `netlify.toml`
   - Deploy!

#### Method C: Netlify CLI (For Developers)
1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login and deploy**:
   ```bash
   netlify login
   netlify deploy --prod --dir=dist
   ```

### Option 2: Vercel (Great Alternative)

1. **Go to [Vercel](https://vercel.com/)**
2. **Sign up with GitHub**
3. **Import your GitHub repository**
4. **Deploy automatically**

### Option 3: GitHub Pages (Free with GitHub)

1. **Push to GitHub** (as shown above)
2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as source
3. **Create deployment workflow**:
   ```bash
   mkdir -p .github/workflows
   ```

### Option 4: Surge.sh (Simple & Fast)

1. **Install Surge**:
   ```bash
   npm install -g surge
   ```

2. **Build and deploy**:
   ```bash
   npm run build
   surge dist
   ```

## 🎯 Quick Deploy Script

I've created a quick deployment script for you:

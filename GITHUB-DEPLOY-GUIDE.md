# 🚀 GitHub + Auto-Deploy Setup Guide

## Step 1: Create GitHub Repository

1. **Go to [GitHub.com](https://github.com)**
2. **Click "New Repository"** (green button, top right)
3. **Repository Settings**:
   - **Name**: `men-of-honor-website`
   - **Visibility**: Public ✅
   - **Initialize**: ❌ **DO NOT** check any boxes
4. **Click "Create repository"**

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you a page with commands. Copy the repository URL (it ends with `.git`).

Then run our setup script:

```bash
./github-setup.sh https://github.com/YOUR-USERNAME/men-of-honor-website.git
```

**Or manually run these commands:**

```bash
# Replace YOUR-USERNAME with your GitHub username
git remote add origin https://github.com/YOUR-USERNAME/men-of-honor-website.git
git branch -M main
git push -u origin main
```

## Step 3: Set Up Auto-Deploy with Netlify

1. **Go to [Netlify.com](https://www.netlify.com/)**
2. **Sign up/Login** with your GitHub account
3. **Click "New site from Git"**
4. **Choose GitHub** as your provider
5. **Select your repository**: `men-of-honor-website`
6. **Build settings** (auto-detected from `netlify.toml`):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18
7. **Click "Deploy site"**

## Step 4: Your Site is Live! 🎉

- **Build time**: 2-3 minutes
- **Live URL**: `https://amazing-site-123.netlify.app` (you can customize this)
- **Auto-deploy**: Every time you push to GitHub, it rebuilds automatically

## Alternative: Vercel Auto-Deploy

If you prefer Vercel over Netlify:

1. **Go to [Vercel.com](https://vercel.com/)**
2. **Sign up with GitHub**
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Deploy** (settings are auto-detected)

## Managing Your Live Site

### Making Updates:
```bash
# Make your changes to the code
git add .
git commit -m "Description of changes"
git push
```

### Your site will automatically:
- ✅ Rebuild when you push changes
- ✅ Deploy the new version
- ✅ Keep the same URL
- ✅ Maintain version history

### Custom Domain (Optional):
Both Netlify and Vercel support custom domains like `menofhonor.com` if you have one.

## What You'll Get:

- **Live Website**: Accessible worldwide
- **HTTPS**: Secure connection automatically
- **CDN**: Fast loading from anywhere
- **Auto-Deploy**: Updates when you push to GitHub
- **Free Hosting**: No ongoing costs
- **Professional URL**: Can be customized

Ready to go live? Follow the steps above! 🚀

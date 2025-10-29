# 🚀 GitHub Setup Guide

Follow these steps to push your project to GitHub.

---

## **Step 1: Create a New Repository on GitHub**

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in the details:
   - **Repository name:** `kix-vision-ui-v2` (or your preferred name)
   - **Description:** "KIX Vision UI V2 - Modern React + TypeScript + Vite dashboard application"
   - **Visibility:** Choose Public or Private
   - **⚠️ DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

---

## **Step 2: Copy the Repository URL**

After creating the repo, GitHub will show you a page with setup instructions. **Copy the HTTPS URL** that looks like:
```
https://github.com/YOUR_USERNAME/kix-vision-ui-v2.git
```

---

## **Step 3: Connect Your Local Repo to GitHub**

Run these commands in your terminal (replace `YOUR_USERNAME/kix-vision-ui-v2` with your actual repo URL):

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/kix-vision-ui-v2.git

# Verify it was added
git remote -v

# Push your current branch to GitHub
git push -u origin cleanup-unused-code

# Optional: Push all branches
git push --all origin
```

---

## **Step 4: Optional - Push to Main Branch**

If you want to push to the `main` branch instead:

```bash
# Switch to main branch
git checkout main

# Merge your work into main
git merge cleanup-unused-code

# Push main branch
git push -u origin main
```

---

## **Quick Command Reference**

```bash
# Check current branch
git branch

# Check remote status
git remote -v

# Add remote (only needed once)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin cleanup-unused-code

# View all branches
git branch -a
```

---

## **Troubleshooting**

**Problem:** "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/kix-vision-ui-v2.git
```

**Problem:** "Permission denied"
- Make sure you're authenticated with GitHub
- You may need to set up SSH keys or use a personal access token
- Visit: https://github.com/settings/tokens

**Problem:** "Refusing to merge unrelated histories"
```bash
git pull origin main --allow-unrelated-histories
```

---

**Need help?** Just provide me the GitHub repository URL and I can help you set it up!


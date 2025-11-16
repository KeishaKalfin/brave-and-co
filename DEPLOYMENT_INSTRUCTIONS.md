# Brave Site Deployment Instructions

## GitHub Pages Setup

Since the GitHub token doesn't have workflow scope, you'll need to manually set up GitHub Pages deployment:

1. Go to your repository: https://github.com/KeishaKalfin/brave-and-co
2. Click on **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. The workflow file is already created at `.github/workflows/deploy.yml`

## Manual Workflow Trigger

If the workflow doesn't trigger automatically:

1. Go to **Actions** tab in your repository
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" → "Run workflow"

## Site Configuration

The site is configured to:
- Deploy from the root directory (no base path)
- Use GitHub Pages with Astro static site generation
- Be accessible at: https://keishakalfin.github.io/

## Build Status

You can monitor the deployment status in the **Actions** tab of your repository.
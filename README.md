# Spectralink Global Logistics Website

React + Vite + TypeScript + Tailwind static website for Spectralink Global Logistics Pvt Ltd.

## Local setup

```bash
npm install
npm run dev
```

Open the local URL shown in terminal.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

### Option A: GitHub Actions

1. Create a GitHub repository, for example `spectralink-website`.
2. Push this project:

```bash
git init
git add .
git commit -m "Initial Spectralink website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/spectralink-website.git
git push -u origin main
```

3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. The included workflow will publish automatically.

For a project site, the workflow builds with:

```bash
VITE_BASE=/spectralink-website/ npm run build
```

Change `spectralink-website` to your actual repo name inside `.github/workflows/deploy.yml`.

### Option B: gh-pages package

Edit `vite.config.ts` or run with the correct base:

```bash
VITE_BASE=/YOUR_REPO_NAME/ npm run build
npm run deploy
```

Then set GitHub Pages source to the `gh-pages` branch.

## Contact form

The form is static-ready. Replace the placeholder Formspree action in `src/components/ContactForm.tsx` with your own endpoint.

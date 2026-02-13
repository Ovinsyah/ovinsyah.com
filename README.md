# ovinsyah.com

Personal portfolio website built with React + TypeScript + Vite.

## Scripts

```bash
# Install dependencies
yarn install

# Start dev server (port 3000)
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Deploy to GitHub Pages (gh-pages branch)
yarn deploy

# Lint
yarn lint
```

## Deploy

`yarn deploy` will:
1. Run `yarn build` (TypeScript compile + Vite build + copy `404.html` for SPA routing)
2. Publish `dist/` to the `gh-pages` branch via `gh-pages`

Live at: https://ovinsyah.com

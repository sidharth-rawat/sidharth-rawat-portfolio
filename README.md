# Sidharth Rawat — Portfolio

Personal portfolio site. React + Vite + TypeScript, retro 8-bit-inspired dark theme.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the build
```

## Deploy (Vercel)

Import the repo on [vercel.com](https://vercel.com) — it auto-detects Vite.
Build command `npm run build`, output `dist/`. Done.

> After deploy, update the URL in `index.html` (canonical / og:url),
> `public/robots.txt`, and `public/sitemap.xml` if your Vercel domain differs
> from `sidharthrawat.vercel.app`.

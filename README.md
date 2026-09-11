# Nibicons

A Next.js site for browsing, copying, and installing the Nibicons icon set.

Live site: https://nibicons.vercel.app/

React package: https://www.npmjs.com/package/nibicons

## What's dynamic here (vs. the old single HTML file)

- **Every icon has its own page** at `/icons/[name]` (e.g. `/icons/home`), each with its own
  title and meta description — this is what actually drives search traffic over time, since
  Google can index 40+ individual pages instead of one.
- **`/sitemap.xml`** is generated automatically from `data/icons.js` — add an icon, it's in the
  sitemap on the next build, no manual editing.
- **`/robots.txt`** points crawlers at the sitemap.
- Pages are statically generated at build time (`generateStaticParams`), so it's still as fast
  as a static file, but with real routing, metadata, and Vercel analytics available.

## Project structure

```
app/
  layout.js         root layout, fonts, global <head> metadata
  page.js            home page (hero, browse, install, usage)
  globals.css        all styles
  sitemap.js          generates /sitemap.xml
  robots.js           generates /robots.txt
  icons/[name]/page.js   one page per icon, statically pre-rendered
components/
  Header.js, Footer.js, Hero.js    static pieces
  IconBrowser.js                   client component: search + filter + copy
  InstallSection.js                client component: npm/yarn/pnpm install tabs
  UsageSection.js, CopyButton.js   usage snippets + reusable copy button
data/
  icons.js            <- single source of truth for every icon
```

## Adding or replacing icons

Edit `data/icons.js`. Each entry is:

```js
{ name: 'home', category: 'navigation', svg: '<path d="..."/>' }
```

- `svg` is just the inner markup of a 24×24 `<svg>` (paths, circles, etc.) — swap in your own
  artwork here.
- `name` becomes the URL slug (`/icons/home`) and the search/copy label — keep it lowercase,
  hyphenated.
- Everything else (the grid, the sitemap, the detail pages, the icon count in the hero) updates
  itself from this array. No other file needs touching to add an icon.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Site URL configuration

The production site uses `https://nibicons.vercel.app` by default. If you connect a custom domain,
set the `NEXT_PUBLIC_SITE_URL` environment variable in Vercel's project settings. It is used in
the sitemap and Open Graph metadata:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

If you keep the Vercel domain, no environment variable is required.

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo. Vercel auto-detects
   Next.js — no config needed.
3. Add the `NEXT_PUBLIC_SITE_URL` environment variable in the project's Vercel settings before
   the first deploy.
4. Deploy. Every push to your main branch redeploys automatically.

The live sitemap is available at https://nibicons.vercel.app/sitemap.xml.

## Published npm package

The React icon package is published publicly. Users can install it with:

```bash
npm install nibicons
```

Use the components like this:

```jsx
import { Home, Search } from 'nibicons';

<Home size={20} />
<Search size={20} />
```

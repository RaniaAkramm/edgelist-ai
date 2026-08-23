# EdgeList.ai

A directory of AI tools built with Next.js (App Router) and Tailwind CSS.

## Stack

- Next.js 14 (App Router, JS not TS)
- Tailwind CSS
- Static sample data in `data/tools.js` and `data/categories.js` — swap for a database
  or CMS when ready

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Structure

- `app/` — routes: home, `/tools`, `/tools/[slug]`, `/categories`, `/categories/[slug]`,
  `/submit`, `/about`, `/privacy`, `/terms`, plus `sitemap.js` and `robots.js`
- `components/` — UI building blocks (`ToolCard`, `SearchBar`, `ToolFilters`,
  `SubmitToolForm`, etc.)
- `data/` — the tools and categories list. Add a tool by adding an object to
  `data/tools.js`; add a category the same way in `data/categories.js`.
- `lib/` — small helpers (`utils.js`) and SEO metadata builder (`seo.js`)

## Before you launch

- `data/tools.js` and `data/categories.js` hold placeholder sample entries — replace with
  real listings, or wire up a database/CMS and fetch from there instead.
- `components/SubmitToolForm.jsx` currently only logs submissions to the console. Wire it
  to an API route, database, or form service (e.g. an `app/api/submit/route.js` handler)
  before going live.
- `public/favicon.ico`, `public/logo.svg`, and `public/og-image.png` are placeholders —
  swap in real brand assets.
- `app/privacy/page.jsx` and `app/terms/page.jsx` contain placeholder legal text only.
- Update `SITE_URL` in `lib/seo.js` once you have a production domain.

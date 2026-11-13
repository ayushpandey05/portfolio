# Ayush Pandey Portfolio

Personal portfolio for Ayush Pandey — SDE II, Mobile & Frontend Engineer.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Motion**. Designed as a dark editorial single-page site with content sourced from [`content/resume.ts`](content/resume.ts).

## Stack

- Next.js + React + TypeScript
- Tailwind CSS v4
- Motion (Framer Motion) for scroll reveals
- Lucide icons
- Deploy target: Vercel

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start the development server |
| `npm run build` | Production build         |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint               |

## Content updates

Edit [`content/resume.ts`](content/resume.ts) for profile copy, stats, projects, experience, and skills. Replace [`public/Ayush_Pandey_Resume.pdf`](public/Ayush_Pandey_Resume.pdf) when the resume changes.

Optional environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Used for canonical URLs, sitemap, and Open Graph metadata. Defaults to `https://ayushpandey.dev`.

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new). Framework preset is detected automatically as Next.js.
3. Set `NEXT_PUBLIC_SITE_URL` to your production URL if it differs from the default.
4. Optional: attach a custom domain such as `ayushpandey.dev`.

Every push to the production branch triggers a new deployment.

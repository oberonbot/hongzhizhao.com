# hongzhizhao.com

Personal portfolio website built with Next.js and Tailwind CSS. Includes a landing page, MDX blog, UI component playground, photography gallery, and a projects showcase.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, CSS Variables for theming
- **Content:** [Contentlayer 2](https://github.com/timlrx/contentlayer2) with MDX
- **Animation:** Framer Motion
- **Email:** Resend + React Email
- **Analytics:** Vercel Analytics & Speed Insights
- **Deployment:** Vercel

## Features

- **Landing Page** — Animated intro, about, projects, skills, and contact sections
- **Blog** — MDX-powered with syntax highlighting, table of contents, and GFM support
- **UI Dojo** — Interactive UI component demos (Dynamic Island, Tilt Card, p5.js sketches, etc.)
- **Photography** — Responsive photo gallery
- **Dark Mode** — System-aware theme toggle via `next-themes`
- **Contact Form** — Server Action powered email via Resend

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your RESEND_API_KEY in .env

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/                  # Next.js App Router pages
  blog/               # MDX blog (index + dynamic slug)
  photography/        # Photo gallery
  ui-dojo/            # UI component demos
  project/            # Projects page
components/           # Reusable React components
  blog/               # Blog-specific (MDX renderer, callouts, code)
  landing-page/       # Homepage sections
  photography/        # Photo components
  practice/           # UI experiment components
  ui-dojo/            # Dojo card & code display
content/              # MDX source files
  blog/               # Blog posts
  authors/            # Author profiles
context/              # React context providers
lib/                  # Utilities, data, types, hooks
actions/              # Server Actions (email)
email/                # React Email templates
```

## Environment Variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key for [Resend](https://resend.com) email service |

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

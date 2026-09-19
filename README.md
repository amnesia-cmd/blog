# Packet & Process

A personal technology blog built with Next.js, TypeScript, Tailwind CSS, and local MDX content.

## Focus

The site is designed for publishing practical notes about software engineering, networking, homelab infrastructure, and lessons learned while building projects.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- MDX

## Development

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run start
```

Run linting with:

```bash
npm run lint
```

## Content

Create `.md` or `.mdx` posts in `content/blog/`. Frontmatter controls titles, slugs, dates, categories, tags, featured status, and cover images.

## Architecture

Content remains local and is transformed into the site's listing, taxonomy, search, related-post, sitemap, and navigation views. This keeps publishing simple and avoids requiring a database for the core blog workflow.

## SEO and deployment

The application generates canonical metadata, Open Graph/Twitter metadata, article structured data, a sitemap, and robots configuration. Set `NEXT_PUBLIC_SITE_URL` to the final deployment URL.

## Status

Active personal publishing project.

## Privacy

Do not commit private notes, credentials, personal data, or unpublished material that should not be public.

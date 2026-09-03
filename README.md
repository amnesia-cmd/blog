# Packet & Process

A production-ready personal technology blog built with Next.js, TypeScript, Tailwind CSS, and local MDX content.

## Requirements

- Node.js 20 or newer
- npm

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open the local URL printed by Next.js, usually `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Add a blog post

Create a new `.md` or `.mdx` file in `content/blog/`.

Example:

```text
content/blog/vlan-home-network.mdx
```

Use frontmatter like this:

```yaml
---
title: "VLAN Notes From a Home Network"
slug: "vlan-home-network"
description: "Practical notes from learning VLANs at home."
date: "2026-09-03"
author: "Akhil"
category: "Networking"
tags:
  - Networking
  - Homelab
featured: false
coverImage: "/images/example.svg"
---
```

The post automatically appears in the blog listing, category pages, tag pages, search index, related posts, sitemap, and previous/next navigation.

## Add images

Place images in `public/images/`, then reference them from MDX:

```mdx
![A meaningful description](/images/my-diagram.png)
```

Use images that explain the topic: diagrams, screenshots, architecture sketches, or hardware photos you have permission to publish.

## Add categories

Categories are data-driven from post frontmatter. The initial category list lives in `lib/taxonomy.ts` so empty starter categories can still appear before posts exist.

## Add tags

Add tags in post frontmatter. Tag pages are generated automatically.

## MDX components

Available article components:

```mdx
<Callout type="tip">A short useful note.</Callout>
<Callout type="important">Something readers should notice.</Callout>
<Callout type="warning">A mistake to avoid.</Callout>
<Callout type="learned">A personal lesson.</Callout>
<Figure src="/images/diagram.png" alt="Network diagram" caption="A short caption." />
<ArchitectureDiagram />
```

## SEO

Post metadata, canonical URLs, Open Graph data, Twitter/X metadata, Article structured data, `sitemap.xml`, and `robots.txt` are generated from local content and `lib/site.ts`.

Set the production URL before deploying:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

## Deployment

This project is designed for low-cost static-friendly hosting. Cloudflare Pages is a good initial target for a Next.js site without a database or paid backend.

Typical Cloudflare Pages settings:

- Build command: `npm run build`
- Environment variable: `NEXT_PUBLIC_SITE_URL`
- Node version: 20 or newer

GitHub Pages can also work for fully static exports, but dynamic Next.js features may require extra configuration. Cloudflare Pages is the simpler recommendation for this architecture.

## Custom domain

After deployment, add your domain in the hosting provider dashboard, update DNS as instructed, and set `NEXT_PUBLIC_SITE_URL` to the final canonical domain.

## Future integrations

The site includes a newsletter placeholder, affiliate link component, monetization-ready layout slots, and an analytics slot. No external newsletter service, ad network, affiliate provider, or invasive analytics are connected by default.

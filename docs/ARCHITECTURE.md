# Architecture

Packet & Process is a Next.js technology blog using TypeScript, Tailwind CSS, and local MDX content.

## Content flow

MDX content → front matter parsing → Next.js rendering → styled article pages

## Responsibilities

- **Next.js:** application routing and rendering.
- **MDX:** local, version-controlled article content.
- **Tailwind:** presentation and responsive layout.
- **Utility libraries:** metadata, dates, reading time, syntax highlighting, and Markdown features.

Keeping article content in the repository makes changes reviewable and gives the blog a straightforward static/deployment path.

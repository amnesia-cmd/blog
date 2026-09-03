export const siteConfig = {
  name: "Packet & Process",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  description:
    "A practical personal technology blog about homelabs, Linux, networking, Docker, servers, hardware, and self-hosting.",
  author: "Akhil",
  nav: [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/categories", label: "Categories" },
    { href: "/about", label: "About" }
  ]
};

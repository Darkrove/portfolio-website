export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Sajjad Shaikh",
  description: "web developer",
  bio: "I am a self-taught 👨‍💻 web developer and programmer who recently pursued a computer science degree 🎓. I started coding in the 11th grade and discovered my passion for 🌐 web development during the COVID-19 pandemic. I love working on both the frontend and backend. Currently, I am exploring the exciting world of Web 3 🕸️.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  url: "https://sajjadshaikh.vercel.app",
  domain: "sajjadshaikh.vercel.app",
  ogImage: "https://sajjadshaikh.vercel.app/opengraph-image.jpg",
  links: {
    twitter: "https://twitter.com/sajjads72619701",
    github: "https://github.com/Darkrove",
  },
};

const SITE_DOMAIN = process.env.VERCEL_URL || siteConfig.domain;

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? `https://${SITE_DOMAIN}`
    : "http://localhost:3000";

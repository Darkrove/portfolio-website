export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "sajjad shaikh",
  description: "Database Administrator | Data Specialist",
  bio: "Data Specialist with expertise in MongoDB, data monitoring, and database administration. Currently at HERE Technologies, optimizing databases and ensuring data integrity while gaining hands-on experience with MongoDB, Atlas, and database design. Passionate about NoSQL databases, performance tuning, and building scalable solutions. Additionally, I have a strong interest in React and Next.js, having worked on numerous projects using Next.js. Always eager to learn, innovate, and connect!",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  url: "https://sajjadshaikh.vercel.app",
  domain: "sajjadshaikh.vercel.app",
  mail: "samaralishaikh212@gmail.com",
  ogImage: "https://sajjadshaikh.vercel.app/opengraph-image.jpg",
  links: {
    twitter: "https://twitter.com/sajjads72619701",
    github: "https://github.com/Darkrove",
  },
};

const SITE_DOMAIN = siteConfig.domain;

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? `https://${SITE_DOMAIN}`
    : "http://localhost:3000";

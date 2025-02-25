export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "sajjad shaikh",
  description: "Database Administrator | Data Specialist | MongoDB Expert",
  bio: "Data Specialist with expertise in MongoDB, Data Monitoring, and Database Administration. Currently at HERE Technologies, optimizing databases and ensuring data integrity. Previously, a Database Administrator at 9I-INFOTECH PVT LTD, gaining hands-on experience with MongoDB, Atlas, and Database Design. Passionate about NoSQL databases, performance tuning, and scalable solutions. Always eager to learn and connect!",
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

export const apiUrls = {
  leetcode: {
    get: (id: string) =>
      `http://sajjadshaikh.vercel.app/api/leetcode?username=${id}`,
  },
  lanyard: {
    get: (id: string) => `https://api.lanyard.rest/v1/users/${id}`,
  },
  github: {
    get: (id: string) =>
      `http://sajjadshaikh.vercel.app/api/github?username=${id}`,
  },
  umami: {
    get: "http://sajjadshaikh.vercel.app/api/umami",
  },
};

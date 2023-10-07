export const apiUrls = {
  leetcode: {
    get: (id: string) => `/api/leetcode?username=${id}`,
  },
  lanyard: {
    get: (id: string) => `https://api.lanyard.rest/v1/users/${id}`,
  },
  github: {
    get: (id: string) => `/api/github?username=${id}`,
  },
  umami: {
    get: "/api/umami",
  },
};

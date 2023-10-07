export const apiUrls = {
  leetcode: {
    get: (username: string) => `/api/leetcode?username=${username}`,
  },
  lanyard: {
    get: (id: string) => `https://api.lanyard.rest/v1/users/${id}`,
  },
  github: {
    get: (username: string) => `/api/github?username=${username}`,
  },
  umami: {
    get: (id: string) => `/api/umami?id=${id}`,
  },
};

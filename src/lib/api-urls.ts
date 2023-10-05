export const apiUrls = {
  leetcode: {
    get: ({ id }: { id: string }) =>
      `http://sajjadshaikh.vercel.app/api/leetcode?username=${id}`,
  },
  auth: {
    signup: "/api/auth/signup",
    signin: "/api/auth/signin",
  },
};

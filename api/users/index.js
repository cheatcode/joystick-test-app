export default {
  users: {
    get: (_input = {}, context = {}) => {
      return context?.user;
    },
  },
};
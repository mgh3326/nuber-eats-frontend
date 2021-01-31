module.exports = {
  client: {
    includes: ["./src/**/*.{tsx,ts}"],
    tagName: "gql",
    service: {
      name: "nuber-eats-backend",
      url: "https://nuber-eats-backend-mgh3326.herokuapp.com/graphql",
    },
  },
};

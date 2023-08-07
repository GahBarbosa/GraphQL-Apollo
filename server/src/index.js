const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema");
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const mocks = {
    Query: () => ({
        users: () => [...new Array(6)],
    }),
    User: () => ({
      name: () => "Gabriel Barbosa",
      age: () => 32,
      thumbnail: () => "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg",
      photo: () => 'https://github.com/GahBarbosa.png'
    }),
};

async function startApolloServer() {
    const server = new ApolloServer({
        schema: addMocksToSchema({
          schema: makeExecutableSchema({ typeDefs }),
          mocks,
        }),
    });
    const { url } = await startStandaloneServer(server);
    console.log(`Server is running Query at ${url}`);
}

startApolloServer();
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const Query = require('./resolvers/Query');

const resolvers = {
  Query,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8',
  ),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
    };
  },
});

server
  .listen({ port: process.env.PORT })
  .then(({ url }) => console.log(`Server is running on ${url}`));

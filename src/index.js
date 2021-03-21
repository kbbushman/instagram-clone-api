const fs = require('fs');
const path = require('path');
require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const Query = require('./resolvers/Query');

const resolvers = {
  Query,
};

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8',
  ),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
    };
  },
});

server
  .listen({ port: process.env.PORT })
  .then(({ url }) => console.log(`Server is running on ${url}`));

// server.js

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./db/schema');
const resolvers = require('./db/resolvers');

const app = express();

// Add GraphQL middleware
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true // Enable GraphiQL GUI for testing
}));

// Your existing routes and middleware

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/graphql');
});

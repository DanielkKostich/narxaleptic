const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Create an instance of Express
const app = express();

// Define your GraphQL schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Create a root resolver
const root = {
  hello: () => 'Hello, World!'
};

// Add a GraphQL endpoint to the Express server
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true  // Enable GraphiQL GUI for testing
}));

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/graphql');
});

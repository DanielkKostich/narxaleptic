const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./db/schema');
const resolvers = require('./db/resolvers');
const mongoose = require('mongoose');


const app = express();

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/newsletter', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

// Add GraphQL middleware
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true, // Enable GraphiQL GUI for testing
  })
);

// Your existing routes and middleware
// ...

const port = 3000;
app.listen(port, () => {
  console.log( `Server is running on http://localhost:${port}/graphql`);
});
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./db/schema');
const resolvers = require('./db/resolvers');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/contact-page', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

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
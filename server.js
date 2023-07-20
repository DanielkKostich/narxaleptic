const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./db/schema');
const resolvers = require('./db/resolvers');
const mongoose = require('mongoose');
const emailroutes = require('./routes/emailroutes');
const connectDB = require('./db/db')
const app = express();

// Connect to MongoDB
app.use(connectDB());

// Add GraphQL middleware
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true, // Enable GraphiQL GUI for testing
  })
);
app.use('/email', emailroutes);


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/graphql`);
});
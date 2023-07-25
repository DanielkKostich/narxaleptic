const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connectDB = require('./db/db');
const app = express();

// Create the Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

connectDB()
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the Apollo Server once the database connection is established
    server.start().then(() => {
      // Apply the Apollo Server middleware to the Express app
      server.applyMiddleware({ app });
      const port = 3000;
      app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}/graphql`);
      });
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Middleware
app.use(express.json()); // Parse JSON request bodies

// User model
const User = require('./models/User');

// Signup route
app.post('/signupPage', async (req, res) => {
  // ... (rest of the signup code)
});

// Login route
app.post('/loginpage', async (req, res) => {
  // ... (rest of the login code)
});

// Signup page route for HTTP GET
app.get('/signupPage', (req, res) => {
  res.send('This is the signup page.');
});

// Login page route for HTTP GET
app.get('/loginpage', (req, res) => {
  res.send('This is the login page.');
});

// Root path route
app.get('/', (req, res) => {
  res.send('Hello, welcome to my server!');
});

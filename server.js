const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./db/schema');
const resolvers = require('./db/resolvers');
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connectDB = require('./db/db');

const app = express();

connectDB()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Add GraphQL middleware
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true, // Enable GraphiQL GUI for testing
  })
);

// User model
const User = require('./models/User');

// Signup route
app.post('/signupPage', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the email or username is already registered
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(409).json({ error: 'Email or username already exists' });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Generate JWT token upon successful signup
    const token = jwt.sign({ userId: newUser._id }, 'YOUR_SECRET_KEY', {
      expiresIn: '1h', // Set the expiration time for the token
    });

    res.status(201).json({ message: 'Signup successful', token });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Login route
app.post('/loginpage', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate JWT token upon successful login
    const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY', {
      expiresIn: '1h',
    });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Signup page route for HTTP GET
app.get('/signupPage', (req, res) => {
  // You can render a signup page or send a response as needed.
  // For example, you can send a simple message:
  res.send('This is the signup page.');
});

// Login page route for HTTP GET
app.get('/loginpage', (req, res) => {
  // You can render a login page or send a response as needed.
  // For example, you can send a simple message:
  res.send('This is the login page.');
});

// Root path route
app.get('/', (req, res) => {
  res.send('Hello, welcome to my server!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/graphql`);
});
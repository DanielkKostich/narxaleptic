const mongoose = require('mongoose');
const User = require('../models/User');

// Replace the following with your actual database connection URI
const dbURI = 'mongodb://localhost:27017/testdb';

async function connectToDatabase() {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');

    // Perform a simple query, like fetching all users
    const users = await User.find();
    console.log('Users:', users);

    // Close the database connection after the query
    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

connectToDatabase();

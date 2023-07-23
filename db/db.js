const mongoose = require('mongoose');
const fs = require('fs');

// Connect to MongoDB
const connectDB = async () => {
  try {

    await mongoose.connect('mongodb://localhost:27017/testdb', {

      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

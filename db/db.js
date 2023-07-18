const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/newsletter', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

// Define the email schema
const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

// Define the email model
const Email = mongoose.model('Email', emailSchema);

// Save an email to the database
const saveEmail = async (email) => {
  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    console.log('Email saved successfully');
  } catch (error) {
    console.error('Error saving email:', error);
    throw error;
  }
};

module.exports = {
  connectDB,
  saveEmail,
};

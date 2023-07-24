const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const jwtSecret = process.env.jwtSecret;

const resolvers = {
  Query: {
    users: async () => {
      try {
        console.log('Fetching users...');
        const users = await User.find({});
        console.log('Users fetched:', users);
        return users; // Make sure the 'users' array is not null
      } catch (error) {
        console.log('Error fetching users:', error);
        throw new Error('Failed to fetch users. Please try again later.');
      }
    },
  },



  Mutation: {
    createUser: async (_, { username, email, password }) => {
      console.log('Creating new user...');
      const existingUser = await User.findOne({ $or: [{ email }, { username }] });
      if (existingUser) {
        console.log('Email or username already exists');
        throw new Error('Email or username already exists');
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      await newUser.save();
      console.log('New user created:', newUser);

      const token = jwt.sign({ userId: newUser._id }, jwtSecret, {
        expiresIn: '1h',
      });

      return newUser;
    },
    login: async (_, { email, password }) => {
      console.log('User login...');
      const user = await User.findOne({ email });
      if (!user) {
        console.log('User not found');
        throw new Error('User not found');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        console.log('Invalid password');
        throw new Error('Invalid password');
      }

      const token = jwt.sign({ userId: user._id }, jwtSecret, {
        expiresIn: '1h',
      });

      console.log('User logged in:', user);
      return user;
    },
  },
};

module.exports = resolvers;

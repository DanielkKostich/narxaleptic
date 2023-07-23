require('dotenv').config();
require('graphql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const jwtSecret = process.env.jwtSecret;

 

const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.find({});
        return users;
      } catch (error) {
        console.log('Error fetching users:', error);
        throw new Error('Failed to fetch users. Please try again later.');
      }
    },
  },
  Mutation: {
    createUser: async (_, { username, email, password }) => {
      const existingUser = await User.findOne({ $or: [{ email }, { username }] });
      if (existingUser) {
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

      const token = jwt.sign({ userId: newUser._id }, jwtSecret, {
        expiresIn: '1h',
      });

      return newUser;
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error('Invalid password');
      }

      const token = jwt.sign({ userId: user._id }, jwtSecret, {
        expiresIn: '1h',
      });

      return user;
    },
  },
};

module.exports = resolvers;

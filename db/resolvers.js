const User = require('./user');

const resolvers = {
  getUser: async ({ id }) => {
    try {
      return await User.findById(id);
    } catch (error) {
      console.error('Error retrieving user:', error);
      throw new Error('Error retrieving user');
    }
  },
  getAllUsers: async () => {
    try {
      return await User.find();
    } catch (error) {
      console.error('Error retrieving users:', error);
      throw new Error('Error retrieving users');
    }
  },
  createUser: async ({ name, email }) => {
    try {
      const newUser = new User({ name, email });
      return await newUser.save();
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Error creating user');
    }
  },
  updateUser: async ({ id, name, email }) => {
    try {
      const user = await User.findById(id);
      if (!user) {
        throw new Error(`User with ID ${id} not found.`);
      }
      user.name = name || user.name;
      user.email = email || user.email;
      return await user.save();
    } catch (error) {
      console.error('Error updating user:', error);
      throw new Error('Error updating user');
    }
  },
  deleteUser: async ({ id }) => {
    try {
      const user = await User.findByIdAndDelete(id);
      if (!user) {
        throw new Error(`User with ID ${id} not found.`);
      }
      return user;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw new Error('Error deleting user');
    }
  },
};

module.exports = resolvers;

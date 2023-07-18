

const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  ];
  
  const resolvers = {
    getUser: ({ id }) => {
      return users.find(user => user.id === id);
    },
    getAllUsers: () => {
      return users;
    },
    createUser: ({ name, email }) => {
      const newUser = { id: String(users.length + 1), name, email };
      users.push(newUser);
      return newUser;
    },
    updateUser: ({ id, name, email }) => {
      const user = users.find(user => user.id === id);
      if (!user) {
        throw new Error(`User with ID ${id} not found.`);
      }
      user.name = name || user.name;
      user.email = email || user.email;
      return user;
    },
    deleteUser: ({ id }) => {
      const userIndex = users.findIndex(user => user.id === id);
      if (userIndex === -1) {
        throw new Error(`User with ID ${id} not found.`);
      }
      const deletedUser = users[userIndex];
      users.splice(userIndex, 1);
      return deletedUser;
    }
  };
  
  module.exports = resolvers;
  

const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, './db.json');

const getUsers = () => {
  const data = fs.readFileSync(dbPath);
  return JSON.parse(data);
};

const saveUsers = (users) => {
  const data = JSON.stringify(users, null, 2);
  fs.writeFileSync(dbPath, data);
};

const resolvers = {
  getUser: ({ id }) => {
    const users = getUsers();
    return users.find(user => user.id === id);
  },
  getAllUsers: () => {
    return getUsers();
  },
  createUser: ({ name, email }) => {
    const users = getUsers();
    const newUser = { id: String(users.length + 1), name, email };
    users.push(newUser);
    saveUsers(users);
    return newUser;
  },
  updateUser: ({ id, name, email }) => {
    const users = getUsers();
    const user = users.find(user => user.id === id);
    if (!user) {
      throw new Error(`User with ID ${id} not found.`);
    }
    user.name = name || user.name;
    user.email = email || user.email;
    saveUsers(users);
    return user;
  },
  deleteUser: ({ id }) => {
    const users = getUsers();
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new Error(`User with ID ${id} not found.`);
    }
    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);
    saveUsers(users);
    return deletedUser;
  }
};

module.exports = resolvers;

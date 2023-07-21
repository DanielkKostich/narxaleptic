const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    updateUser(id: ID!, username: String, email: String, password: String): User
    deleteUser(id: ID!): User
  }
`);

module.exports = schema;

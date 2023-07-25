// ./db/schema.js
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
    login(email: String!, password: String!): User!
  }
`;

module.exports = typeDefs;

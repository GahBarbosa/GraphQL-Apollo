const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    users: [User]
  }

  type User {
    id: ID!
    name: String!
    age: Int
    photo: String
    office: String
    thumbnail: String
    taks: [Task]
  }

  type Task {
    id: ID!
    name: String!
    description: String!
  }
`

module.exports = typeDefs;
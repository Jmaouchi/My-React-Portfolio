const { gql } = require('apollo-server-express');

// this defs will make the decision of what data would be send back form the database
const typeDefs = gql`
type Contact {
  _id : ID,
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: Int,
  text: String
}

type Review {
  _id: ID
  reviewBody: String
  createdAt: String
}


type Query {
  contacts: [Contact]
}

type Mutation {
  addContact(firstName: String, lastName: String, email: String, phoneNumber: Int, text: String) : [Contact]
}
`;

module.exports = typeDefs;

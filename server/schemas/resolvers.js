const { AuthenticationError } = require('apollo-server-express');
const {Contact } = require('../models/index');


const resolvers = {
  // a query can only retrieve data from the database
  Query: {
    // Get a single user, using the context as a param, 
    // Here we are addiing the token to check for a single user, with this we can see what user is logged in 
    // get all users, this can be a good use for the admin to see how many users are in there 
    contacts: async () => {
      return Contact.find()
        .select('-__v')
    },
  },


  Mutation: {
    addContact: async (parent, args) => {
      const  contact = await Contact.create(args);
      return {contact}
    },
  }
};

module.exports = resolvers;
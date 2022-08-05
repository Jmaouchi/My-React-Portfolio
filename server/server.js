const express = require('express');
// import ApolloServer to be able to use graphql as a middleware
const { ApolloServer } = require('apollo-server-express');
// import path
const path = require('path');
// import connection to db
const db = require('./config/connection');
// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');

 

const PORT = process.env.PORT || 3001;
// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
await server.start();
// integrate our Apollo server with the Express application as middleware
server.applyMiddleware({ app });

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      // log where we can go to test our GQL API
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
    // Serve up static assets
    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../client/build')));
    }

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/public/index.html'));
    });
  })
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
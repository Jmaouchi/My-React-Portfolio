const express = require('express');
// set a port number for the server 
const PORT = process.env.PORT || 3001;


const app = express();
// parse incoming string or array data (it will parse any data that is coming from the outside of the server)
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json()) // The express.json() method we used takes incoming POST data in the form of JSON and parses it into the req.body JavaScript object
//The way the express.static works is that we provide a file path to a location in our application (in this case, 
//the public folder) and instruct the server to make these files static resources.e so like html can use style.css realated to it and javascript related to it 
app.use(express.static('public'));

// this is to start listening to the server 
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

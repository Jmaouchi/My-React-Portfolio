const { Schema, model } = require('mongoose');

const ContactSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    }
  },
  
  {
    toJSON: {
      virtuals: true
    }
  }
);


const Contact = model('Contact', ContactSchema);

module.exports = Contact;

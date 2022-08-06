const { Schema, model } = require('mongoose');

const ContactSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email:{
      type: String,
      unique:true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    phoneNumber: {
      type: Number,
    },
    text: {
      type: String
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

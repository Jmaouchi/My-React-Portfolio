const { Schema, model } = require('mongoose');

const ContactSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email:{
      type: String,
      required: true,
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

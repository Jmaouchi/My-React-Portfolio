const { Schema, model } = require('mongoose');

const ReviewsSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
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


const Review = model('Review', ReviewsSchema);

module.exports = Review;

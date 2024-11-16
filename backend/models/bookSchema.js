const mongoose=require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    ISBN: {
      type: Number
    },
    Title: {
      type: String
    },
    Author: {
      type: String
    },
    YearOfPublication: {
      type: Number
    },
    Publisher: {
      type: String
    },
    smallimageofthebook: {
        type: String
    },
    mediumimageofthebook: {
        type: String
    },
    largeimageofthebook: {
        type: String
    }
  },
  { timestamps: true }
);

module.exports=mongoose.model("books", bookSchema);
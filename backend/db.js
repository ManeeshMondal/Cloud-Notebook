const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/CloudNoteBook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongoose = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo successfully");
  });
};

module.exports = connectToMongoose;

const mongoose = require("mongoose");
const mongoURI =
  // "mongodb://localhost:27017/CloudNoteBook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
  "mongodb+srv://Maneesh1120:maneesh1120@cloudnotebook.msraofg.mongodb.net/test";

const connectToMongoose = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo successfully");
  });
};

module.exports = connectToMongoose;

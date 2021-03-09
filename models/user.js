const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema(
  {
    name: {
      type: String
    },
    last_name: {
      type: String
    },
    email: {
      type: String
    }
  },
  { collection: "User" }
);

module.exports = mongoose.model("User", user);
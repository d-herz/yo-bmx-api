const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  userName: {
    type: String,
    unique: true,
  },

  email: {
    type: String,
    unique: true,

  },

  signUpDate: {
    type: Date, 
    default: Date.now,
  }

})
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    }
  },

  created_at: {
    type: Date, 
    default: Date.now,
  },

  lastActive: {
    type: Date,
    default: new Date,
  },
  
  isAdmin: {
    type: Boolean,
    default: false,
  },

  posts: {
    // array of the users original posts
  },

  profilePic: {
    // Do we need this
  },


})
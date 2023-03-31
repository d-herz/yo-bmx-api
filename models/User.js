const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 12;

const UserSchema = new mongoose.Schema({
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

// Mongoose "Pre" middleware to hash password before saving to DB
UserSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
  } catch (err) {
    return next(err)
  }
})


UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};


module.exports = mongoose.model("User", UserSchema);
const mongoose = require("mongoose");
const { array } = require("../middleware/multer"); // do we need this?

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    ref: "User",
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  upVotes: {
    type: Number,
    default: 0,
    required: true,
  },
  downVotes: {
    type: Number,
    default: 0,
    required: true,
  },
  usersWhoVoted: {
    type: [String],
    required: true,
  },
  numOfComments: {
    type: Number,
    required: true,
  },
  // Comments from the comments model? 
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    }
  ]

});

module.exports = mongoose.model("Post", PostSchema);

const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
  commentUsername: String,
  commentText: String,
  commentTwit: {
    ref: "Twit",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;

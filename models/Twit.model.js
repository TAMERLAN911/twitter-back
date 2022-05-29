const mongoose = require("mongoose");
const twitSchema = mongoose.Schema({
  title: String,
  title: String,
  Likes: [
  {
    ref: "Like",
    type: mongoose.SchemaTypes.ObjectId,
  }
],

  twitComment : {
 ref: 'Comment',
 type: mongoose.SchemaTypes.ObjectId
  }


});

const Twit = mongoose.model("Twit", twitSchema);

module.exports = Twit;

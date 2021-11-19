import mongoose from "mongoose";

const feedSchema = mongoose.Schema({
  title: String,
  description: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const postFeeds = mongoose.model("postFeeds", feedSchema);

export default postFeeds;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  object: { type: Schema.Types.ObjectId, ref: "Object", required: true },
  path: { type: String, required: true },
  posterUrl: { type: String },
  type: { type: String },
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

const VideoModel = mongoose.model("Video", VideoSchema);

module.exports = VideoModel;

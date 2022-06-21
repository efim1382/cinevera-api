const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EpisodeSchema = new Schema({
  season: { type: Schema.Types.ObjectId, ref: "Season" },
  object: { type: Schema.Types.ObjectId, ref: "Object" },
  number: { type: Number, required: true },
  title: { type: String, required: true },
  posterUrl: { type: String, required: true },
  video: { type: Schema.Types.ObjectId, ref: "Video" },
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

const EpisodeModel = mongoose.model("Episode", EpisodeSchema);

module.exports = EpisodeModel;

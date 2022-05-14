const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EpisodeSchema = new Schema({
  season: { type: Schema.Types.ObjectId, ref: "Season" },
  object: { type: Schema.Types.ObjectId, ref: "Object" },
  number: { type: Number, required: true },
  title: { type: String, required: true },
  posterUrl: { type: String, required: true },
  duration: { type: Number, required: true },
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

const EpisodeModel = mongoose.model("Episode", EpisodeSchema);

module.exports = EpisodeModel;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectSchema = new Schema({
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  fullDescription: { type: String, required: true },
  posterUrl: { type: String, required: true },
  backgroundUrl: { type: String, required: true },
  ageLimit: { type: Number },
  year: { type: [Number], required: true },
  genres: { type: [String], required: true },
  objectType: { type: String, required: true },
  video: { type: Schema.Types.ObjectId, ref: "Video" },

  videos: [{
    posterUrl: { type: String },
    videoUrl: { type: String },
    type: { type: String },
  }],

  seasons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Season",
  }],

  cast: [{
    actor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Actor",
    },

    characterName: { type: String },
  }],
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

const MovieModel = mongoose.model("Object", ObjectSchema);

module.exports = MovieModel;

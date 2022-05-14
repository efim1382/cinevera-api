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

  seasons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Season",
  }],
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

const MovieModel = mongoose.model("Object", ObjectSchema);

module.exports = MovieModel;

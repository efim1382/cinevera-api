const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: { type: String, required: true },
  poster: { type: String, required: true },
  preview: { type: String, required: true },
  shortDescription: { type: String },
  description: { type: String },
  year: { type: Number },
  ageLimit: { type: String },
  genres: { type: [String] },
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

const MovieModel = mongoose.model("Movie", MovieSchema);

module.exports = MovieModel;

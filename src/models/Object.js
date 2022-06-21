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
    type: Schema.Types.ObjectId,
    ref: "Video",
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

ObjectSchema.virtual("seasons", {
  ref: "Season",
  localField: "_id",
  foreignField: "object",
});

const MovieModel = mongoose.model("Object", ObjectSchema);

module.exports = MovieModel;

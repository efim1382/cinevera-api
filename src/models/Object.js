const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectSchema = new Schema({
  title: { type: String, required: true },
  objectType: { type: String, required: true },
  status: { type: String, required: true, default: "hidden" },
  year: { type: [Number], required: true },
  ageLimit: { type: Number, required: true },
  shortDescription: { type: String },
  fullDescription: { type: String },
  posterUrl: { type: String },
  backgroundUrl: { type: String },
  genres: { type: [String] },
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

const ObjectModel = mongoose.model("Object", ObjectSchema);

module.exports = ObjectModel;

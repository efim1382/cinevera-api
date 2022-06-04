const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeasonSchema = new Schema({
  object: { type: Schema.Types.ObjectId, ref: "Object" },
  number: { type: Number, required: true },
  name: { type: String },
  backgroundUrl: { type: String, required: true },

  episodes: [{
    type: Schema.Types.ObjectId,
    ref: "Episode",
  }],

  videos: [{
    type: Schema.Types.ObjectId,
    ref: "Video",
  }],
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

const SeasonModel = mongoose.model("Season", SeasonSchema);

module.exports = SeasonModel;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeasonSchema = new Schema({
  object: { type: Schema.Types.ObjectId, ref: "Object" },
  number: { type: Number, required: true },
  backgroundUrl: { type: String, required: true },
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

SeasonSchema.virtual("episodes", {
  ref: "Episode",
  localField: "_id",
  foreignField: "season",
});

const SeasonModel = mongoose.model("Season", SeasonSchema);

module.exports = SeasonModel;

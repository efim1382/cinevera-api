const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActorSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String },
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

const ActorModel = mongoose.model("Actor", ActorSchema);

module.exports = ActorModel;

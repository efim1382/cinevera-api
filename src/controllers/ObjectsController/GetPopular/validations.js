import ObjectModel from "models/Object";
import { query } from "express-validator";
import handleValidationError from "middlewares/handleValidationError";

const types = ["movie", "series"];

export default [
  query("type").optional().isIn(types),

  query("exclude").optional().custom((value) => {
    const excludedObject = ObjectModel.find({
      _id: value,
      objectType: value,
    });

    if (!excludedObject) {
      throw new Error(`${value} object is not defined`);
    }

    return true;
  }),

  handleValidationError,
];

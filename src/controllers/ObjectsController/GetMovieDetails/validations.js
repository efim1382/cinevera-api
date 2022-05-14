import ObjectModel from "models/Object";
import { check, param } from "express-validator";
import handleValidationError from "middlewares/handleValidationError";

export default [
  check("id").notEmpty().withMessage("Movie is not defined"),

  param("id").custom(async (value) => {
    const movie = await ObjectModel.findOne({ _id: value, objectType: "movie" });

    if (!movie) {
      throw new Error("Movie is not defined");
    }

    return true;
  }),

  handleValidationError,
];

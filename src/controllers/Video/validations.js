import VideoModel from "models/Video";
import { check, param } from "express-validator";
import handleValidationError from "middlewares/handleValidationError";

export default [
  check("id").notEmpty().withMessage("Video is not defined"),

  param("id").custom(async (value) => {
    const video = await VideoModel.findOne({ _id: value });

    if (!video) {
      throw new Error("Video is not defined");
    }

    return true;
  }),

  handleValidationError,
];

import UserModel from "models/User";
import { check, param } from "express-validator";
import handleValidationError from "middlewares/handleValidationError";

export default [
  check("id").notEmpty().withMessage("User is not defined"),

  param("id").custom(async (value) => {
    const song = await UserModel.findOne({ _id: value });

    if (!song) {
      throw new Error("User is not defined");
    }

    return true;
  }),

  handleValidationError,
];

import UserModel from "models/User";
import { check, body } from "express-validator";
import handleValidationError from "middlewares/handleValidationError";

export default [
  check("name").notEmpty().withMessage("Name is required"),
  check("email").notEmpty().withMessage("Email is required"),
  check("email").isEmail().withMessage("Email is not valid"),

  body("email").custom(async (value) => {
    const isEmailExist = await UserModel.findOne({ email: new RegExp(`\\b${value}\\b`, "i") });

    if (isEmailExist) {
      throw new Error("E-mail already in use");
    }

    return true;
  }),

  check("password").notEmpty().withMessage("Password is required"),
  check("password").isLength({ min: 8 }).withMessage("Password should be length min 8"),
  handleValidationError,
];

import UserModel from "models/User";
import { check, body } from "express-validator";
import passwordHash from "password-hash";
import handleValidationError from "middlewares/handleValidationError";

export default [
  check("email").notEmpty().withMessage("Email is required"),
  check("email").isEmail().withMessage("Email is not valid"),

  body("email").custom(async (value) => {
    const isEmailExist = await UserModel.findOne({ email: new RegExp(`\\b${value}\\b`, "i") });

    if (!isEmailExist) {
      throw new Error("Wrong email");
    }

    return true;
  }),

  check("password").notEmpty().withMessage("Password is required"),
  check("password").isLength({ min: 8 }).withMessage("Password should be length min 8"),

  body("password").custom(async (value, { req }) => {
    const user = await UserModel.findOne({ email: new RegExp(`\\b${req.body.email}\\b`, "i") });

    if (!user) {
      return true;
    }

    if (!passwordHash.verify(value, user.password)) {
      throw new Error("Wrong password");
    }

    return true;
  }),

  handleValidationError,
];

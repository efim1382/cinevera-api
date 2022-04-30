import UserModel from "models/User";
import { param } from "express-validator";
import handleValidationError from "middlewares/handleValidationError";

export default [
  param("id").custom(async (value) => {
    const user = await UserModel.findOne({ _id: value });

    if (!user) {
      throw new Error("This user is not exist");
    }

    return true;
  }),

  handleValidationError,
];

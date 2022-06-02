import { query } from "express-validator";
import handleValidationError from "middlewares/handleValidationError";

export default [
  query("limit").custom(async (value) => {
    if (!value) {
      return true;
    }

    const parsed = parseInt(value);

    if (!isNaN(parsed) && `${parsed}` !== value) {
      throw new Error("Limit param error");
    }

    return true;
  }),

  handleValidationError,
];

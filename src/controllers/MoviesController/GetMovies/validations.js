import { query } from "express-validator";
import handleValidationError from "middlewares/handleValidationError";
import genresValues from "config/genres";

const sortValues = ["recommended", "year", "rating"];

export default [
  query("sort").custom((value) => {
    if (!!value && !sortValues.includes(value)) {
      throw new Error(`${value} sort type is not defined`);
    }

    return true;
  }),

  query("genres").custom((value) => {
    if (value) {
      const formattedGenres = value.split(",");

      formattedGenres.forEach((item) => {
        if (!genresValues.includes(item)) {
          throw new Error(`${item} genre is not defined`);
        }
      });
    }

    return true;
  }),

  handleValidationError,
];

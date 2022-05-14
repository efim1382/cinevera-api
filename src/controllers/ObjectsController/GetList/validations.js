import { query } from "express-validator";
import handleValidationError from "middlewares/handleValidationError";
import genresValues from "config/genres";

const types = ["movie", "series"];
const sortValues = ["recommended", "year", "rating"];

export default [
  query("type").optional().isIn(types),

  query("sort").optional().isIn(sortValues),

  query("limit").optional().isNumeric(),

  query("genres").optional().custom((value) => {
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

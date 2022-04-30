import express from "express";
import GetMovies from "./GetMovies";
import GetMovie, { validations as getMovieValidations } from "./GetMovie";

import { convertParamToObjectId } from "helpers/convertObjectId";

const router = express.Router();

export default () => {
  router.get("/", GetMovies);

  router.get(
    "/:id",

    [
      convertParamToObjectId("id"),
      ...getMovieValidations,
    ],

    GetMovie,
  );

  return router;
};

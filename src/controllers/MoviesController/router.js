import express from "express";
import GetMovies, { validations as getMoviesValidations } from "./GetMovies";
import Search from "./Search";
import GetPopularMovies from "./GetPopularMovies";
import GetMovie, { validations as getMovieValidations } from "./GetMovie";

import { convertParamToObjectId } from "helpers/convertObjectId";

const router = express.Router();

export default () => {
  router.get("/", getMoviesValidations, GetMovies);

  router.get("/search/", Search);

  router.get("/popular/", GetPopularMovies);

  router.get(
    "/:id/",

    [
      convertParamToObjectId("id"),
      ...getMovieValidations,
    ],

    GetMovie,
  );

  return router;
};

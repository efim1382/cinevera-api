import express from "express";
import GetList, { validations as getListValidations } from "./GetList";
import GetMovieDetails, { validations as getMovieValidations } from "./GetMovieDetails";
import GetSeriesDetails, { validations as getSeriesValidations } from "./GetSeriesDetails";
import GetPopular, { validations as getPopularValidations } from "./GetPopular";
import { convertParamToObjectId } from "helpers/convertObjectId";

const router = express.Router();

export default () => {
  router.get("/", getListValidations, GetList);

  router.get(
    "/movies/details/:id/",

    [
      convertParamToObjectId("id"),
      ...getMovieValidations,
    ],

    GetMovieDetails,
  );

  router.get(
    "/series/details/:id/",

    [
      convertParamToObjectId("id"),
      ...getSeriesValidations,
    ],

    GetSeriesDetails,
  );

  router.get(
    "/popular/",
    getPopularValidations,
    GetPopular,
  );

  return router;
};

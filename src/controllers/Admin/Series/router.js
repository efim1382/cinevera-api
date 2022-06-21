import express from "express";
import Create from "./Create";
import GetList from "./GetList";
import GetOne from "./GetOne";
import GetSeasons from "./GetSeasons";
import Update from "./Update";

const router = express.Router();

export default () => {
  router.get(
    "/",
    GetList,
  );

  router.get(
    "/:id/",
    GetOne,
  );

  router.patch(
    "/:id/",
    Update,
  );

  router.get(
    "/:id/seasons/",
    GetSeasons,
  );

  router.post(
    "/create/",
    Create,
  );

  return router;
};

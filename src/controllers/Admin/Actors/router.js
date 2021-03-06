import express from "express";
import Create from "./Create";
import Update from "./Update";
import GetList from "./GetList";
import GetOne from "./GetOne";

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

  router.post(
    "/create/",
    Create,
  );

  return router;
};

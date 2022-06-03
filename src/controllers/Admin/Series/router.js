import express from "express";
import Create from "./Create";
import GetList from "./GetList";

const router = express.Router();

export default () => {
  router.get(
    "/",
    GetList,
  );

  router.post(
    "/create/",
    Create,
  );

  return router;
};

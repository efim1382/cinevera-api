import express from "express";
import Create from "./Create";

const router = express.Router();

export default () => {
  router.post(
    "/create/",
    Create,
  );

  return router;
};

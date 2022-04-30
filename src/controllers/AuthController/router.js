import express from "express";
import Login, { validations as loginValidations } from "./Login";

const router = express.Router();

export default () => {
  router.post(
    "/login",
    loginValidations,
    Login,
  );

  return router;
};

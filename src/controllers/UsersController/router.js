import express from "express";
import { convertParamToObjectId } from "helpers/convertObjectId";
import GetUser, { validations as getUserValidations } from "./GetUser";
import GetUsers from "./GetUsers";
import NewUser, { validations as newUserValidations } from "./NewUser";
import DeleteUser, { validations as deleteUserValidations } from "./DeleteUser";

const router = express.Router();

export default () => {
  router.get("/", GetUsers);

  router.get(
    "/:id",

    [
      convertParamToObjectId("id"),
      ...getUserValidations,
    ],

    GetUser,
  );

  router.post(
    "/new",
    newUserValidations,
    NewUser,
  );

  router.delete(
    "/:id",

    [
      convertParamToObjectId("id"),
      ...deleteUserValidations,
    ],

    DeleteUser,
  );

  return router;
};

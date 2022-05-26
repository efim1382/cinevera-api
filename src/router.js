import objectsRouter from "controllers/ObjectsController/router";
import search from "controllers/Search";
import video, { validations as videoValidations } from "controllers/Video";

export default (app) => {
  app.use("/api/search", search);
  app.use("/api/video/:id/", videoValidations, video);
  app.use("/api/objects", objectsRouter());
};

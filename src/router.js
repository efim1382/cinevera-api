import objectsRouter from "controllers/ObjectsController/router";
import search from "controllers/Search";
import video, { validations as videoValidations } from "controllers/Video";
import getActor, { validations as getActorValidations } from "controllers/GetActor";
import adminRouter from "controllers/Admin/router";

export default (app) => {
  app.use("/api/search/", search);
  app.use("/api/video/:id/", videoValidations, video);
  app.use("/api/objects", objectsRouter());
  app.use("/api/get-actor/", getActorValidations, getActor);
  adminRouter(app);
};

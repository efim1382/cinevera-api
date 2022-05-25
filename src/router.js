import objectsRouter from "controllers/ObjectsController/router";
import search from "controllers/Search";
import video from "controllers/Video";

export default (app) => {
  app.use("/api/search", search);
  app.use("/api/video/:id/", video);
  app.use("/api/objects", objectsRouter());
};

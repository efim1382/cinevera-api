import objectsRouterV2 from "controllers/ObjectsController/router";
import search from "controllers/Search";

export default (app) => {
  app.use("/api/search", search);
  app.use("/api/objects", objectsRouterV2());
};

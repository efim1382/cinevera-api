import moviesRouter from "./Movies/router";
import seriesRouter from "./Series/router";
import actorsRouter from "./Actors/router";

export default (app) => {
  app.use("/api/admin/movies", moviesRouter());
  app.use("/api/admin/series", seriesRouter());
  app.use("/api/admin/actors", actorsRouter());
};

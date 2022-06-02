import moviesRouter from "./Movies/router";

export default (app) => {
  app.use("/api/admin/movies", moviesRouter());
};

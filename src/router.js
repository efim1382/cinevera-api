import moviesRouter from "controllers/MoviesController/router";

export default (app) => {
  app.use("/api/movies", moviesRouter());
};

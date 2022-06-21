import express from "express";
import Create from "./Create";
import GetList from "./GetList";
import GetOne from "./GetOne";
import CreateSeason from "./CreateSeason";
import UpdateSeason from "./UpdateSeason";
import DeleteSeason from "./DeleteSeason";
import CreateEpisode from "./CreateEpisode";
import UpdateEpisode from "./UpdateEpisode";
import DeleteEpisode from "./DeleteEpisode";
import GetSeasons from "./GetSeasons";
import Update from "./Update";

const router = express.Router();

export default () => {
  router.get(
    "/",
    GetList,
  );

  router.get(
    "/:id/",
    GetOne,
  );

  router.patch(
    "/:id/",
    Update,
  );

  router.post(
    "/:id/seasons/",
    CreateSeason,
  );

  router.get(
    "/:id/seasons/",
    GetSeasons,
  );

  router.patch(
    "/:id/seasons/:seasonId/",
    UpdateSeason,
  );

  router.delete(
    "/:id/seasons/:seasonId/",
    DeleteSeason,
  );

  router.post(
    "/:id/seasons/:seasonId/episodes/",
    CreateEpisode,
  );

  router.patch(
    "/:id/episodes/:episodeId/",
    UpdateEpisode,
  );

  router.delete(
    "/:id/episodes/:episodeId/",
    DeleteEpisode,
  );

  router.post(
    "/create/",
    Create,
  );

  return router;
};

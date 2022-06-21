import EpisodeModel from "models/Episode";
import { formatErrorResponse } from "helpers/formatResponse";

const DeleteEpisode = async (req, res) => {
  const { id, episodeId } = req.params;

  try {
    await EpisodeModel.remove({ _id: episodeId, object: id });

    res.json({
      status: true,
      data: {},
    });
  } catch (error) {
    res.json(formatErrorResponse(error));
  }
};

export default DeleteEpisode;

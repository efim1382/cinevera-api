import EpisodeModel from "models/Episode";
import { formatErrorResponse } from "helpers/formatResponse";

const UpdateEpisode = async (req, res) => {
  const { episodeId } = req.params;

  try {
    const episode = await EpisodeModel.findByIdAndUpdate(episodeId, req.body, { new: true });

    res.json({
      status: true,

      data: {
        episode,
      },
    });
  } catch (error) {
    console.log(error);
    res.json(formatErrorResponse(error));
  }
};

export default UpdateEpisode;

import VideoModel from "models/Video";
import EpisodeModel from "models/Episode";
import { formatErrorResponse } from "helpers/formatResponse";

const CreateEpisode = async (req, res) => {
  const { id: object, seasonId: season } = req.params;

  const {
    title,
    posterUrl,
  } = req.body;

  try {
    const video = await VideoModel.create({ object, type: "episode", path: "test.mp4" });
    const lastEpisodeNumber = await EpisodeModel.countDocuments({ object, season });

    const episode = await EpisodeModel.create({
      number: lastEpisodeNumber + 1,
      title,
      posterUrl,
      object,
      season,
      video: video._id,
    });

    res.json({
      status: true,

      data: {
        episode,
      },
    });
  } catch (error) {
    res.json(formatErrorResponse(error));
  }
};

export default CreateEpisode;

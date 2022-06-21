import SeasonModel from "models/Season";
import { formatErrorResponse } from "helpers/formatResponse";

const UpdateEpisode = async (req, res) => {
  const { seasonId } = req.params;

  try {
    const season = await SeasonModel.findByIdAndUpdate(seasonId, req.body, { new: true });

    res.json({
      status: true,

      data: {
        season,
      },
    });
  } catch (error) {
    console.log(error);
    res.json(formatErrorResponse(error));
  }
};

export default UpdateEpisode;

import SeasonModel from "models/Season";
import { formatErrorResponse } from "helpers/formatResponse";

const CreateSeason = async (req, res) => {
  const { id: object } = req.params;
  const { backgroundUrl } = req.body;

  try {
    const lastSeasonNumber = await SeasonModel.countDocuments({ object });

    const season = await SeasonModel.create({
      object,
      backgroundUrl,
      number: lastSeasonNumber + 1,
    });

    res.json({
      status: true,

      data: {
        season,
      },
    });
  } catch (error) {
    res.json(formatErrorResponse(error));
  }
};

export default CreateSeason;

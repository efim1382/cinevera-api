import SeasonModel from "models/Season";
import { formatErrorResponse } from "helpers/formatResponse";

const DeleteSeason = async (req, res) => {
  const { id, seasonId } = req.params;

  try {
    await SeasonModel.remove({ _id: seasonId, object: id });

    res.json({
      status: true,
      data: {},
    });
  } catch (error) {
    res.json(formatErrorResponse(error));
  }
};

export default DeleteSeason;

import SeasonModel from "models/Season";
import { formatErrorResponse } from "helpers/formatResponse";

const GetOne = async (req, res) => {
  const { id } = req.params;

  try {
    const seasons = await SeasonModel.find({ object: id })
      .populate("episodes");

    res.json({
      status: true,

      data: {
        seasons,
      },
    });
  } catch (error) {
    res.json(formatErrorResponse(error));
  }
};

export default GetOne;

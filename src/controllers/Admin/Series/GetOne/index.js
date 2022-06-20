import ObjectModel from "models/Object";
import { formatErrorResponse } from "helpers/formatResponse";

const GetOne = async (req, res) => {
  const { id } = req.params;

  try {
    const series = await ObjectModel.findOne({ _id: id })
      .populate("cast.actor")

      .populate({
        path: "seasons",

        populate: {
          path: "episodes",
        },
      });

    res.json({
      status: true,

      data: {
        series,
      },
    });
  } catch (error) {
    res.json(formatErrorResponse(error));
  }
};

export default GetOne;

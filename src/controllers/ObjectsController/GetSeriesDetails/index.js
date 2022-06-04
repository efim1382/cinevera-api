import ObjectModel from "models/Object";
import { formatErrorResponse } from "helpers/formatResponse";

const GetSeriesDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const series = await ObjectModel
      .findOne({
        _id: id,
        objectType: "series",
      })

      .populate({
        path: "cast",

        populate: {
          path: "actor",
        },
      })

      .populate({
        path: "videos",
      })

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

export default GetSeriesDetails;
export { default as validations } from "./validations";

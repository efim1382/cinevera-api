import ObjectModel from "models/Object";
import { formatErrorResponse } from "helpers/formatResponse";

const GetMovieDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await ObjectModel
      .findOne({ _id: id })

      .populate("videos")

      .populate({
        path: "cast.actor",
      });

    res.json({
      status: true,

      data: {
        movie,
      },
    });
  } catch (error) {
    res.json(formatErrorResponse(error));
  }
};

export default GetMovieDetails;
export { default as validations } from "./validations";

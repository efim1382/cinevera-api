import MovieModel from "models/Movie";
import { formatErrorResponse } from "helpers/formatResponse";

const GetMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await MovieModel
        .findOne({ _id: id });

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

export default GetMovie;
export { default as validations } from "./validations";

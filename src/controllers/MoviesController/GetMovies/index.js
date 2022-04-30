import MovieModel from "models/Movie";
import { formatErrorResponse } from "helpers/formatResponse";

const GetMovies = async (req, res) => {
  try {
    const movies = await MovieModel
      .find();

    res.json({
      status: true,

      data: {
        movies,
      },
    });
  } catch (error) {
    res.json(formatErrorResponse(error));
  }
};

export default GetMovies;

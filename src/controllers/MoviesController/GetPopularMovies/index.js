import MovieModel from "models/Movie";
import { formatErrorResponse } from "helpers/formatResponse";

const GetPopularMovies = async (req, res) => {
  try {
    const movies = await MovieModel
      .find()
      .limit(10);

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

export default GetPopularMovies;

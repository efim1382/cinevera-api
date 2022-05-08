import MovieModel from "models/Movie";
import { formatErrorResponse } from "helpers/formatResponse";

const GetMovies = async (req, res) => {
  const {
    sort = "recommended",
  } = req.query;

  let { genres = "" } = req.query;

  if (genres) {
    genres = genres.split(",");
  }

  try {
    const findObject = {};

    if (genres) {
      findObject["genres"] = { $all: genres };
    }

    const query = MovieModel.find(findObject);

    if (sort === "year") {
      query.sort({ "year": -1 });
    }

    const movies = await query;

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
export { default as validations } from "./validations";

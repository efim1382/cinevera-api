import MovieModel from "models/Movie";
import { formatErrorResponse } from "helpers/formatResponse";

const Search = async (req, res) => {
  const { query = "" } = req.query;
  let { limit = 10 } = req.query;

  // todo: add validation to limit
  limit = parseInt(limit);

  if (!query) {
    return res.json({
      status: true,
      data: { result: [] },
    });
  }

  try {
    const movies = await MovieModel
      .find({ name: new RegExp(query, "i") })
      .limit(limit);

    res.json({
      status: true,

      data: {
        result: movies,
      },
    });
  } catch (error) {
    console.log(error);
    res.json(formatErrorResponse(error));
  }
};

export default Search;

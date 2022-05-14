import ObjectModel from "models/Object";
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
    const result = await ObjectModel
      .find({ title: new RegExp(query, "i") })
      .limit(limit);

    res.json({
      status: true,

      data: {
        result,
      },
    });
  } catch (error) {
    console.log(error);
    res.json(formatErrorResponse(error));
  }
};

export default Search;

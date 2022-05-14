import ObjectModel from "models/Object";
import { formatErrorResponse } from "helpers/formatResponse";

const GetList = async (req, res) => {
  const {
    type,
    sort = "recommended",
    genres = "",
  } = req.query;

  let { limit } = req.query;

  if (limit) {
    limit = parseInt(limit);
  }

  const findObject = {};
  const sortObject = {};

  if (type) {
    findObject["objectType"] = type;
  }

  if (genres) {
    findObject["genres"] = { $all: genres.split(",") };
  }

  if (sort === "year") {
    sortObject["year"] = -1;
  }

  try {
    const query = ObjectModel.find(findObject);

    if (Object.keys(sortObject).length > 0) {
      query.sort(sortObject);
    }

    if (limit) {
      query.limit(limit);
    }

    const result = await query;

    res.json({
      status: true,

      data: {
        result,
      },
    });
  } catch (error) {
    res.json(formatErrorResponse(error));
  }
};

export default GetList;
export { default as validations } from "./validations";

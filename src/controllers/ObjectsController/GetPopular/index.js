import ObjectModel from "models/Object";
import { formatErrorResponse } from "helpers/formatResponse";

const GetPopular = async (req, res) => {
  const { type, exclude } = req.query;

  const findObject = {};

  if (type) {
    findObject["objectType"] = type;
  }

  if (exclude) {
    findObject["$and"] = [
      { _id: { $ne: exclude } },
    ];
  }

  try {
    const result = await ObjectModel
      .find(findObject);

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

export default GetPopular;
export { default as validations } from "./validations";

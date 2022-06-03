import ObjectModel from "models/Object";
import { formatErrorResponse } from "helpers/formatResponse";

const GetList = async (req, res) => {
  try {
    const result = await ObjectModel.find({ objectType: "movie" });

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

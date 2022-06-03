import ObjectModel from "models/Object";
import { formatErrorResponse } from "helpers/formatResponse";

const Create = async (req, res) => {
  try {
    const series = await ObjectModel.create({
      ...req.body,
      objectType: "series",
    });

    res.json({
      status: true,

      data: {
        series,
      },
    });
  } catch (error) {
    console.log(error);
    res.json(formatErrorResponse(error));
  }
};

export default Create;

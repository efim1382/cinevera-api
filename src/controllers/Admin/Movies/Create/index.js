import ObjectModel from "models/Object";
import { formatErrorResponse } from "helpers/formatResponse";

const Create = async (req, res) => {
  try {
    const movie = await ObjectModel.create({
      ...req.body,
      objectType: "movie",
    });

    res.json({
      status: true,

      data: {
        movie,
      },
    });
  } catch (error) {
    console.log(error);
    res.json(formatErrorResponse(error));
  }
};

export default Create;

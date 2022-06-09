import ObjectModel from "models/Object";
import { formatErrorResponse } from "helpers/formatResponse";

const GetOne = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await ObjectModel.findOne({ _id: id });

    res.json({
      status: true,

      data: {
        movie,
      },
    });
  } catch (error) {
    res.json(formatErrorResponse(error));
  }
};

export default GetOne;

import ObjectModel from "models/Object";
import { formatErrorResponse } from "helpers/formatResponse";

const Update = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await ObjectModel.findByIdAndUpdate(id, req.body, { new: true });

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

export default Update;

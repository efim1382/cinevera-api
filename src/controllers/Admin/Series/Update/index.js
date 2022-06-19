import ObjectModel from "models/Object";
import { formatErrorResponse } from "helpers/formatResponse";

const Update = async (req, res) => {
  const { id } = req.params;

  try {
    const series = await ObjectModel.findByIdAndUpdate(id, req.body, { new: true })
      .populate("cast.actor");

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

export default Update;

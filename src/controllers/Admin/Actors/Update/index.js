import ActorModel from "models/Actor";
import { formatErrorResponse } from "helpers/formatResponse";

const Update = async (req, res) => {
  const { id } = req.params;

  try {
    const actor = await ActorModel.findByIdAndUpdate(id, req.body, { new: true });

    res.json({
      status: true,

      data: {
        actor,
      },
    });
  } catch (error) {
    console.log(error);
    res.json(formatErrorResponse(error));
  }
};

export default Update;

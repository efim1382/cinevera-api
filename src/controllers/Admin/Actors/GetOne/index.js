import ActorModel from "models/Actor";
import { formatErrorResponse } from "helpers/formatResponse";

const GetActor = async (req, res) => {
  const { id } = req.params;

  try {
    const actor = await ActorModel.findOne({ _id: id });

    res.json({
      status: true,

      data: {
        actor,
      },
    });
  } catch (error) {
    res.json(formatErrorResponse(error));
  }
};

export default GetActor;

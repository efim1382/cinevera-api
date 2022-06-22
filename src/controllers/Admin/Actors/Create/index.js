import ActorModel from "models/Actor";
import { formatErrorResponse } from "helpers/formatResponse";

const Create = async (req, res) => {
  try {
    const actor = await ActorModel.create(req.body);

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

export default Create;

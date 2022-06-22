import ActorModel from "models/Actor";
import { formatErrorResponse } from "helpers/formatResponse";

const GetList = async (req, res) => {
  try {
    const actors = await ActorModel.find();

    res.json({
      status: true,

      data: {
        actors,
      },
    });
  } catch (error) {
    res.json(formatErrorResponse(error));
  }
};

export default GetList;

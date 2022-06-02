import ActorModel from "models/Actor";
import { formatErrorResponse } from "helpers/formatResponse";

const GetActor = async (req, res) => {
  const { query = "" } = req.query;
  let { limit = 10 } = req.query;

  limit = parseInt(limit);

  if (!query) {
    return res.json({
      status: true,
      data: { result: [] },
    });
  }

  try {
    const result = await ActorModel
      .find({ name: new RegExp(query, "i") })
      .limit(limit);

    res.json({
      status: true,

      data: {
        result,
      },
    });
  } catch (error) {
    console.log(error);
    res.json(formatErrorResponse(error));
  }
};

export default GetActor;

export { default as validations } from "./validations";

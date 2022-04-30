import UserModel from "models/User";
import { formatErrorResponse } from "helpers/formatResponse";

const GetUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel
        .findOne({ _id: id })
        .select(["name", "email"]);

    res.json({
      status: true,

      data: {
        user,
      },
    });
  } catch (error) {
    res.json(formatErrorResponse(error));
  }
};

export default GetUser;
export { default as validations } from "./validations";

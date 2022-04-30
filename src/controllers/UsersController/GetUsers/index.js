import UserModel from "models/User";
import { formatErrorResponse } from "helpers/formatResponse";

const GetUsers = async (req, res) => {
  try {
    const users = await UserModel
        .find()
        .select(["name", "email"]);

    res.json({
      status: true,

      data: {
        users,
      },
    });
  } catch (error) {
    res.json(formatErrorResponse(error));
  }
};

export default GetUsers;

import UserModel from "models/User";
import { formatErrorResponse } from "helpers/formatResponse";

const DeleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await UserModel.findOneAndRemove({ _id: id });

    return res.json({
      status: true,
    });
  } catch (error) {
    res.json(formatErrorResponse(error));
  }
};

export default DeleteUser;
export { default as validations } from "./validations";

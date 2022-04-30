import UserModel from "models/User";
import jwt from "jsonwebtoken";
import { formatErrorResponse } from "helpers/formatResponse";

const ONE_DAY = 60 * 60 * 24;

const NewUser = async (req, res) => {
  const { email } = req.body;

  try {
    const {
      _id,
      name,
    } = await UserModel.findOne({ email: new RegExp(`\\b${email}\\b`, "i") });

    const token = jwt.sign(
      { _id, name },
      "superSecret",
      { expiresIn: ONE_DAY },
    );

    res.json({
      status: true,

      data: {
        token,

        user: {
          _id,
          name,
        },
      },
    });
  } catch (error) {
    res.json(formatErrorResponse(error));
  }
};

export default NewUser;
export { default as validations } from "./validations";

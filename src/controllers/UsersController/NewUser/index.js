import UserModel from "models/User";
import { formatErrorResponse } from "helpers/formatResponse";
import passwordHash from "password-hash";

const NewUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await UserModel.create({
      name,
      email,
      password: passwordHash.generate(password),
    });

    return res.json({
      status: true,

      data: {
        user,
      },
    });
  } catch (error) {
    res.json(formatErrorResponse(error));
  }
};

export default NewUser;
export { default as validations } from "./validations";

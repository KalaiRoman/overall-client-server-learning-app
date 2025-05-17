import {
  comparePassword,
  createPassword,
} from "../middleware/PasswordBcrypt.js";
import { createToken } from "../middleware/Token.js";
import auth_model from "../models/auth_model.js";

// register
export const registerUser = async (req, res, next) => {
  try {
    const { email, name, password } = req.body;
    const existUser = await auth_model.findOne({
      $or: [{ email: email }, { name: name }],
    });

    if (existUser) {
      return res.status(
        404,
        json({ message: "Email or Name is Already Exists", status: false })
      );
    } else {
      const hanshed = await createPassword(password);
      const response = await auth_model.create({
        email,
        password: hanshed,
        name,
      });
      await response.save();
      const token = await createToken(response?._id);

      return res.status(201).json({
        status: true,
        message: "User Created Succssfully",
        data: {
          email,
          name,
          _id: response?._id,
        },
        token,
      });
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = {};
      for (let field in error.errors) {
        errors[field] = error.errors[field].message;
      }
      return res.status(400).json({
        status: false,
        message: "Validation failed",
        errors: errors,
      });
    }
  }
};
// login

export const loginUser = async (req, res, next) => {
  try {
    const { UserCommonName, password } = req.body;
    const existUser = await auth_model.findOne({
      $or: [
        {
          email: UserCommonName,
        },
        {
          name: UserCommonName,
        },
      ],
    });
    if (!existUser)
      return res.status(
        404,
        json({
          message: "User Not Found, Please Register Details",
          status: false,
        })
      );
    const hanshed = await comparePassword(password,existUser.password);
    if (!hanshed)
      return res
        .status(404)
        .json({ status: false, message: "Wrong Password..." });
    const token = await createToken(existUser._id);
    return res.status(200).json({
      status: true,
      message: "User Login Succssfully",
      data: {
        email: existUser.email,
        name: existUser.name,
      },
      token,
    });
  } catch (error) {
    return res.status(404).json({ status: false, message: "Error On Server",error });
  }
};
// get user details
// delete user
// edit details

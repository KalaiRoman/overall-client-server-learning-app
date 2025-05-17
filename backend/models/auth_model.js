import mongoose from "mongoose";

const Auth_user_shema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required..."],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
  },
  {
    timestamps: true,
  }
);

mongoose.models = {};

export default mongoose.model("auth", Auth_user_shema);

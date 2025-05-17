import jwt from "jsonwebtoken";
import { envDatas } from "../utils/Envs.js";

const createToken = async (paramsId) => {
  try {
    return await jwt.sign({ _id: paramsId }, envDatas.key, {
      expiresIn: "1d",
    });
  } catch (error) {
    console.log("Token Create Error");
  }
};

export { createToken };

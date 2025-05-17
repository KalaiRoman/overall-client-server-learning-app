import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import { envDatas } from "./utils/Envs.js";
import ConnectDataBase from "./utils/DataBase.js";
import main_router from "./routes/main_router.js";
dotenv.config();
ConnectDataBase();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    Credential: true,
  })
);

app.use("/kalai", main_router);

app.get("/", async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "🚀 Backend is up and running smoothly! 🎉",
      status: true,
      data: bcrypt,
    });
  } catch (error) {
    return res
      .status(404)
      .json("Backend server issue. Please wait a few minutes.");
  }
});
app.listen(envDatas.Port, () => {
  console.log(`Server Runnig Data ${process.env.PORT}`);
});

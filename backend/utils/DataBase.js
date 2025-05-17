import mongoose from "mongoose";
import { envDatas } from "./Envs.js";

const ConnectDatabase = async () => {
  try {
    const response = await mongoose.connect(envDatas?.BaseUrl);
    // , {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }

    if (response) {
      console.log("✅ Database connected successfully.");
    }
  } catch (error) {
    console.error("❌ Database connection error:", error.message);
  }
};

export default ConnectDatabase;

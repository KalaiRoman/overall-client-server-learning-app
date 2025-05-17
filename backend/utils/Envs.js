import dotenv from "dotenv";
dotenv.config();
const envDatas = {
  BaseUrl: process.env.BASE_URL,
  Port: process.env.PORT,
  key: process.env.SECURITY_KEY,
};

export { envDatas };

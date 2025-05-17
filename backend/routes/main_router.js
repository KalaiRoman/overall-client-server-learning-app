import express from "express";
import user_router from "./user_router.js";

const main_router = express.Router();

main_router.use("/auth", user_router);

export default main_router;

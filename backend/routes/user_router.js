import express from "express";
import { loginUser, registerUser } from "../controlls/Auth_controll.js";

const user_router = express.Router();
user_router.post("/register",registerUser);
user_router.post("/login",loginUser);

export default user_router;

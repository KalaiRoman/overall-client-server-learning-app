import { lazy } from "react";

const Login = lazy(() => import("../components/auth/Login"));
const Signup = lazy(() => import("../components/auth/Signup"));
const Home = lazy(() => import("../components/home/Home"));

export { Login, Signup, Home };

import { Home, Login, Signup } from "./Pages";

const routingPaths = [
  {
    id: 1,
    name: "Login",
    component: Login,
    auth: true,
    index: true,
    path: "/",
  },
  {
    id: 2,
    name: "Register",
    component: Signup,
    auth: true,
    index: false,
    path: "/sign-up",
  },
  {
    id: 3,
    name: "Home",
    component: Home,
    auth: false,
    index: false,
    path: "/home",
  },
];

export default routingPaths;

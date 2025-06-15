import { AllMentors, Home, Login, Payment, Signup, Tuition } from "./Pages";

const routingPaths = [
  {
    id: 1,
    name: "Login",
    component: Tuition,
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
  {
    id: 3,
    name: "Home",
    component: AllMentors,
    auth: true,
    index: false,
    path: "/mentor",
  },
  {
    id: 3,
    name: "Payment",
    component: Payment,
    auth: true,
    index: false,
    path: "/payment",
  },
];

export default routingPaths;

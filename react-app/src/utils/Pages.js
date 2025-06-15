import { lazy } from "react";

const Login = lazy(() => import("../components/auth/Login"));
const Signup = lazy(() => import("../components/auth/Signup"));
const Home = lazy(() => import("../components/home/Home"));
const Tuition = lazy(() => import("../components/tution/Tuition"));
const AllMentors = lazy(() =>
  import("../components/tution/components/AllMentors")
);
const Payment = lazy(() =>
  import("../components/tution/components/paymentScreen")
);

export { Login, Signup, Home, Tuition, AllMentors, Payment };

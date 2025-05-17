import { BrowserRouter } from "react-router-dom";
import SuspenseLoader from "./SuspenseLoader";
function BrowserRouters({ children }) {
  return (
    <BrowserRouter>
      <SuspenseLoader>{children}</SuspenseLoader>
    </BrowserRouter>
  );
}

export default BrowserRouters;

import BrowserRouters from "../middleware/BrowserRouters";
import ContextProvider from "../middleware/ContextProvider";
function AllMiddleware({ children }) {
  return (
    <BrowserRouters>
      <ContextProvider>{children}</ContextProvider>
    </BrowserRouters>
  );
}
export default AllMiddleware;

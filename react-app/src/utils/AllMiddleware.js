import BrowserRouters from "../middleware/BrowserRouters";
import ContextProvider from "../middleware/ContextProvider";
import ReduxProvider from "../middleware/ReduxProvider";
function AllMiddleware({ children }) {
  return (
    <BrowserRouters>
      <ReduxProvider>
        <ContextProvider>{children}</ContextProvider>
      </ReduxProvider>
    </BrowserRouters>
  );
}
export default AllMiddleware;

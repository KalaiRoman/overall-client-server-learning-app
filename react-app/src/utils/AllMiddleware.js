import BrowserRouters from "../middleware/BrowserRouters";
import ContextProvider from "../middleware/ContextProvider";
import ReduxProvider from "../middleware/ReduxProvider";
import toast, { Toaster } from 'react-hot-toast';
function AllMiddleware({ children }) {
  return (
    <BrowserRouters>
      <ReduxProvider>
        <Toaster/>
        <ContextProvider>{children}</ContextProvider>
      </ReduxProvider>
    </BrowserRouters>
  );
}
export default AllMiddleware;

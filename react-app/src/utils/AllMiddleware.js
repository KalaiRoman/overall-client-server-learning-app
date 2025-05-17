import ContextProvider from "../middleware/ContextProvider";

function AllMiddleware({ children }) {
  return <ContextProvider>{children}</ContextProvider>;
}

export default AllMiddleware;

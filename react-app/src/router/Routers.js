import routingPaths from "../utils/RoutingPaths";
import { Route, Routes } from "react-router-dom";
import ProtectedRouter from "../middleware/ProtectedRouter";
function Routers() {
  return (
    <>
      <Routes>
        {routingPaths?.map((item, index) => {
          if (item?.auth) {
            return (
              <Route
                index={item.index}
                element={<item.component />}
                path={item.path}
                lkye={index}
              ></Route>
            );
          } else {
            return (
              <Route element={<ProtectedRouter />}>
                <Route
                  index={item.index}
                  element={<item.component />}
                  path={item.path}
                  key={index}
                ></Route>
              </Route>
            );
          }
        })}
      </Routes>
    </>
  );
}

export default Routers;

import React, { Suspense } from "react";
import Loader from "../utils/Loader";

function SuspenseLoader({ children }) {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

export default SuspenseLoader;

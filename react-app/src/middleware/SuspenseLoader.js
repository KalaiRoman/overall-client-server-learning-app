import React, { Suspense } from "react";

function SuspenseLoader({ children }) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}

export default SuspenseLoader;

import React from "react";
import { ThreeCircles } from "react-loader-spinner";
function Loader() {
  return (
    <div className="loader">
      <ThreeCircles
        height="100"
        width="100"
        radius="9"
        color="orangered"
        ariaLabel="loading"
      />
    </div>
  );
}

export default Loader;

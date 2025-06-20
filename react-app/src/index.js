import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AllMiddleware from "./utils/AllMiddleware";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AllMiddleware>
    <App />
  </AllMiddleware>
);

reportWebVitals();

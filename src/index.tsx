import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

if (process.env.NODE_ENV === "development") {
  require("##/devTools/msw");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

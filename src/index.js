import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import Instructions from "./Instructions"
import App from "./App";


ReactDOM.render(
  <StrictMode>
    <>
      <App />
      <br />
      <hr />
      <Instructions />
    </>
  </StrictMode>,
  document.getElementById("root")
);

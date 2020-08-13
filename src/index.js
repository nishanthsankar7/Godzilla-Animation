import React from "react";
import ReactDOM from "react-dom";


import GodzillaComponent from "./GodzillaComponent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <GodzillaComponent />
  </React.StrictMode>,
  rootElement
);

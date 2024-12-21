import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "../src/components/ui/provider";
import { defaultSystem } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider system={defaultSystem}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

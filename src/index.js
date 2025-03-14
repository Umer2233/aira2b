import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import MyProvider from "./contaxt/allstates";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyProvider>
    <Router>
      <App />
    </Router>
  </MyProvider>
);

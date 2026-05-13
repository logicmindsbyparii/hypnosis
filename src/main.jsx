// main.jsx - ✅ CORRECT (keep as is)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter> {/* ✅ Single Router here is perfect */}
    <App />
  </BrowserRouter>
);
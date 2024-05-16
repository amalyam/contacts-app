import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("No root element found.");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

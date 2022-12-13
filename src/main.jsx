import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CounterContextProvider } from "./context/CounterContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </React.StrictMode>
);

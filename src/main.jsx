import React from "react";
import ReactDOM from "react-dom/client"; // Change this import
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

// Create a root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance
reportWebVitals();

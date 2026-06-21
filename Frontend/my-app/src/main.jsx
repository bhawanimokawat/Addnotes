import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/themes.css";
import "./styles/dashboard.css";
import "./styles/auth.css";
import ThemeProvider from "./context/ThemeContext";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
 <ThemeProvider>

   <App />

 </ThemeProvider>

);
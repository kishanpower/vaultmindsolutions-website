import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

import { ThemeProvider }
from "./context/ThemeContext";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>

          <App />

          <Toaster
            position="top-right"
            reverseOrder={false}
          />

        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);

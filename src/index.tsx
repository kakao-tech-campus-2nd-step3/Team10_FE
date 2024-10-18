import ReactDOM from "react-dom/client";
import React from "react";
import AppRouter from "@routes/AppRouter";
import Providers from "./providers";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Providers>
      <AppRouter />
    </Providers>
  </React.StrictMode>,
);

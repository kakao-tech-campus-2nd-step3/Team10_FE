import * as ReactDOM from "react-dom/client";
import * as React from "react";
import AppRouter from "./routes/AppRouter";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);

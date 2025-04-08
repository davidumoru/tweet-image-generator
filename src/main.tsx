import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
        <App />
      </div>
    </Router>
  </StrictMode>
);

import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import homepage from "./homepage";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { AuthProvider } from './backend/context/AuthProvider';
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
  <AuthProvider>
    <App />
	</AuthProvider>
  </StrictMode>
);

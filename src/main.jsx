import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes.jsx";
import MainLayout from "./Layout/MainLayout/MainLayout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
    <MainLayout/>
    </RouterProvider>
  </React.StrictMode>
);

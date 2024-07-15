import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DescriptionPage from "../pages/DescriptionPage";
import Homepage from "../pages/Homepage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/details/:id",
    element: <DescriptionPage />,
    errorElement: <ErrorPage />,
  },
]);

export { router };

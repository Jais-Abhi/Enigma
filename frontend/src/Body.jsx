import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Events from "./components/Events";


const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/events",
      element: <Events />,
    },
    
  ]);
  return <RouterProvider router={router} />;
};

export default Body;

import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Events from "./components/Events";
import About from "./components/About";
import MemberSlider from "./components/Member";
import Contact from "./components/contact";


const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: (
        [
          {
            path: "/events",
            element: <Events />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/members",
            element: <MemberSlider />,
          },
          {
            path: "/contact",
            element: <Contact />,
          }
        ]
      )
    }
    
    
  ]);
  return <RouterProvider router={router} />;
};

export default Body;

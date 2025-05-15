import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import { Route, createBrowserRouter, RouterProvider } from "react-router";
import Events from "./components/Events.jsx";
import MemberSlider from "./components/Member.jsx";
import Contact from "./components/contact.jsx";
import About from "./components/About.jsx";
import Main from "./components/main/Main.jsx";
import Gallery from "./components/Gallery.jsx";
import Header from "./components/Header.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

// const isAuthenticated = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "", element: <Main /> },
      { path: "events", element: <Events /> },
      { path: "gallery", element: <Gallery /> },
      { path: "members", element: <MemberSlider /> },
      { path: "about", element: <About /> },
      {
        path: "admin/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/admin/login",
    element: (
      <>
        <Header />
        <Login />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { Route,createBrowserRouter,createRoutesFromElements,createRoutesFromChildren, RouterProvider } from 'react-router'
import Events from './components/Events.jsx'
import MemberSlider from './components/Member.jsx'
import Contact from './components/contact.jsx'
import About from './components/About.jsx'
import Main from './components/main/Main.jsx'
import Gallery from './components/Gallery.jsx'
import Admin from './components/Admin.jsx'
import Header from './components/Header.jsx'
import Dashboard from './components/Dashboard.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: (
      [
        {
          path: "",
          element: <Main />
        },
        {
          path: "/events",
          element: <Events />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/members",
          element: <MemberSlider />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },{
          path:"/dashboard",
          element:<Dashboard />
        }
      ]
    )
  },
  {
    path:"/admin",
    element:[<Header />,<Admin />]
  }
  
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)

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
import Main from './components/Main.jsx'
import Gallery from './components/Gallery.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: (
      [
        {
          path: "",
          element: [<Main />,<About />,<Events /> , <MemberSlider />,<Gallery/>]
        },
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


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)

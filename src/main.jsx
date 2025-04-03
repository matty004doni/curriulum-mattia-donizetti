import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Competenze from './components/Competenze'
import Progetti from './components/Progetti'
import { CardPage } from './components/Progetti'
import Esperienze from './components/Esperienze'
import './main.css'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Landing from './components/Landing'
import Chisono from './components/ChiSono'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing></Landing>,
  },
  {
    path: "/competenze",
    element: <Competenze></Competenze>,
  },
  {
    path: "/progetti",
    element: <Progetti></Progetti>,
  },
  {
    path: "/chisono",
    element: <Chisono></Chisono>,
  },
  {
    path: "/esperienze",
    element: <Esperienze></Esperienze>,
  },
  {
    path: "/card/:id/:title",
    element: <CardPage></CardPage>,
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

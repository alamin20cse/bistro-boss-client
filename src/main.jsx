import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './Route/Router.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router} />
     </div>
  </StrictMode>,
)
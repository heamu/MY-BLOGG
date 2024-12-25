import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"
import Homepage from './Routes/Homepage.jsx'
import PostListPage from './Routes/PostListPage.jsx'
import Registerpage from './Routes/RegisterPage.jsx'
import Write from './Routes/Write.jsx'
import LoginPage from './Routes/LoginPage.jsx'
import MainLayOut from './layouts/MainLayout.jsx'
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element: <MainLayOut/>,
    children:[
      {
        path:"/",
        element:<Homepage/>,
      },
      {
        path :"/posts",
        element:<PostListPage/>,
      },
      {
        path :"/:slug",
        element:<PostListPage/>,
      },
      {
        path :"/write",
        element:<Write/>,
      },
      {
        path :"/Login",
        element:<LoginPage/>,
      },
      {
        path :"/Register",
        element:<Registerpage/>,
      },
    ]
  },
  

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router = {router}/>
    </ClerkProvider>
  </StrictMode>
)

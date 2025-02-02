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
import SinglePostPage from './Routes/SinglePostPage.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

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
        element:<SinglePostPage/>,
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
    <QueryClientProvider client={queryClient} >
    <RouterProvider router = {router}/>
    <ToastContainer position='bottom-right' />
    </QueryClientProvider>
    </ClerkProvider>
    
    
  </StrictMode>
)

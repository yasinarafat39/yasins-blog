import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from '../src/pages/Home'
import Dashboard from '../src/pages/Dashboard'
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/About';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>
  },
  {
    path: '/signin',
    element: <Signin></Signin>
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>
  },
  {
    path: '/about',
    element: <About></About>
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

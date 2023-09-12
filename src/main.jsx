import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './Login.jsx'
import SignUp from './SignUp.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import HomeAdmin from './HomeAdmin.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App /> 
  },
  {
    path: '/login',
    element: <Login /> 
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/homeadmin',
    element: <HomeAdmin/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/> 
)

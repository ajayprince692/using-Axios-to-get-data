import React from 'react'
import AppRoutes from './components/AppRoutes'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
export const API_URL='https://65981fb3668d248edf2428f7.mockapi.io/api/v2/user'


function App() {
  const router=createBrowserRouter(AppRoutes)
  return <>
  <RouterProvider router={router}/>
  </>
}

export default App
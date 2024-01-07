import React from 'react'
import AppRoutes from './components/AppRoutes'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
export const API_URL='https://659848cf668d248edf2466c4.mockapi.io/taskblog'


function App() {
  const router=createBrowserRouter(AppRoutes)
  return <>
  <RouterProvider router={router}/>
  </>
}

export default App
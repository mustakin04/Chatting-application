import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './Components/Ragistration/Registration'
import Login from './Components/Login/Login'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import firebaseConfig from './Components/Authentication/firbase.config'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
    </Route>
  )
);
function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

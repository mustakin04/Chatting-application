import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './Pages/Ragistration/Registration'
import Login from './Pages/Login/Login'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import firebaseConfig from './Components/Authentication/firbase.config'
import Home from './Pages/Home/Home'
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword'
import Massage from './Pages/Massage/Massage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/forgetpassword" element={<ForgetPassword/>}/>
      <Route path="/massage" element={<Massage/>}/>
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

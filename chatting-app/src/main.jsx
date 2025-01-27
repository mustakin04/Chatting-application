import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Store.js'
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
import Root from './Pages/Root/Root.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "registration",
    element: <Registration/>
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "forgetpassword",
    element: <ForgetPassword/>,
  },
  {
    path: "message",
    element: <Massage/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
   <RouterProvider router={router} />
   </Provider>
   
  </StrictMode>,
)

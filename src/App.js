import React from "react";
import "./App.css"
import Api from "./components/Api";
import Head from "./components/Head";
import {Outlet, RouterProvider, createBrowserRouter,} from "react-router-dom";
import Body from "./components/Body";
import Watchpage from "./components/Watchpage";
const Applayout=()=>{
  return(
    <React.StrictMode>
    <Head/>
    <Outlet/>
    </React.StrictMode>
  )
}

const Approuter=createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    children:[{
      path:"/",
      element:<Body/>
    },
    {
      path:"/watch",
      element:<Watchpage/>
    }
  ]
  }
])

const App=()=>{
  return(
    <>
    <div>
      <RouterProvider router={Approuter}/>
    </div>
    </>

  )
}

export default App;
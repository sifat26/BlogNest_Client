import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Login from "../Authentication/Login";
import { Register } from "../Authentication/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },{
            path:'/login',
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        }
      ]
    },
  ]);
  export default router;
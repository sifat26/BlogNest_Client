import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Login from "../Authentication/Login";
import { Register } from "../Authentication/Register";
import ErrorPage from "../Pages/Error/ErrorPage";
import AddBlog from "../Pages/AddBlog/AddBlog";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
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
        },{
          path:'/addblog',

          element:
          <PrivateRoute><AddBlog/></PrivateRoute>
        },{
          path:'/blogdetails/:id',
          element:<BlogDetails/>
        },{
          path:'/allblogs',
          element:<AllBlogs/>
        }
      ]
    },
  ]);
  export default router;
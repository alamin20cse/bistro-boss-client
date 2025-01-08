import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Home/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Home/Login/Login";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>

        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    },
  ]);
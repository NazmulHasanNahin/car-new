import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import Checkout from "../Pages/Checkout/checkout";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children : [
        {
          path : "/",
          element :<Home></Home> ,
        },
        {
          path : "/login",
          element :<Login></Login> ,
        },
        {
          path : "/reg",
          element :<Signup></Signup> ,
        },
        {
          path : "/checkout/:id",
          element : <Checkout></Checkout>,
          loader : ({params}) =>fetch(`http://localhost:5000/services/${params}`) ,
        },
      ]
    },
  ]);


export default router
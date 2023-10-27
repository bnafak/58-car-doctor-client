import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/home/About";
import Home from "../pages/home/Home";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children :[
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/about',
          element:<About></About>
        }
      ]
    },
  ]);

  export default router;
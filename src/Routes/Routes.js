import { createBrowserRouter } from "react-router-dom";
import AddNew from "../Pages/AddNew/AddNew";
import Completed from "../Pages/Completed/Completed";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Layout from "../layout/Layout";
import Trash from "../Pages/Trash/Trash";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
    {
       path:"/",
       element:<PrivateRoutes><Layout/></PrivateRoutes>,
       children: [
        {
            path: "/",
            element:<AddNew/>
        },
        {
            path:"/completed",
            element: <Completed/>
        },
        {
            path:"/trash",
            element:<Trash/>
        }
       ]
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    }
])

export default routes;
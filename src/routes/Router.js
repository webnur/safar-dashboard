import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from '../pages/Login/Login'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/login',
                element: <Login />
            }
        ]
    }

])
import { createBrowserRouter } from "react-router-dom";
import { Login } from './pages/Login'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>index</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <h1>Register</h1>,
  },
]);

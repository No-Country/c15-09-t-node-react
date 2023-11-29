import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>index</h1>,
  },
  {
    path: "/login",
    element: <h1>login</h1>,
  },
  {
    path: "/register",
    element: <h1>Register</h1>,
  },
]);

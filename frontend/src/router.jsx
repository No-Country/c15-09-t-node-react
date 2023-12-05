import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { MainLayout } from "./components/layouts/MainLayout";
import { AppIndex } from "./pages/AppIndex";
import { Stylespage } from "./pages/Stylespage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/app",
    element: <MainLayout />,
    children: [
      {
        // path: "/",
        index: true,
        element: <AppIndex />,
      },
      {
        path: "styles",
        element: <Stylespage />
      },
    ],
  },

]);

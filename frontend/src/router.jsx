import { Navigate, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { MainLayout } from "./components/layouts/MainLayout";
import { AppIndex } from "./pages/AppIndex";
import { Stylespage } from "./pages/Stylespage";
import { CreateBeer } from "./pages/CreateBeer";
import { StyleDetails } from "./pages/StyleDetails";
import { RecipeBeer } from "./pages/RecipeBeer";
import { RecipeBeerDetails } from "./pages/RecipeBeerDetails";
import { ProfileLayout } from "./components/layouts/ProfileLayout";
import { RecipeFavorites } from "./pages/RecipeFavorites";
import { FavoritesLayout } from "./components/layouts/FavoritesLayout";

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
        element: <Stylespage />,
      },
      {
        path: "styledetails",
        element: <StyleDetails />,
      },
      {
        path: "create",
        element: <CreateBeer />,
      },
      {
        path: "recipe",
        element: <RecipeBeer />,
      },
      {
        path: "recipedetails",
        element: <RecipeBeerDetails />,
      },
      {
        path: "profile",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <div className="mt-8"></div>,
          },
        ],
      },
      {
        path: "favorites",
        element: <FavoritesLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/app/favorites/reciepes" />,
          },
          {
            path: "reciepes",
            element: <RecipeFavorites />,
          },
          {
            path: "styles",
            element: <h1 className="mt-14 text-center">No se encontraron estilos favoritos</h1>,
          },
        ],
      },
    ],
  },
]);

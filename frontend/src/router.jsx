import { createBrowserRouter } from "react-router-dom";
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
import { Contact } from "./pages/Contact";
import { RecipeFavorites } from "./pages/RecipeFavorites";
import { MyRecipes } from "./pages/MyRecipes";
import RequireAuth from "./pages/Auth/RequireAuth";

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

    element: (
      <RequireAuth>
        {" "}
        <MainLayout />
      </RequireAuth>
    ),
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
        path: "styles/:id",
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
        path: "recipe/:id",
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
          {
            path: "recipeFavorites",
            element: <RecipeFavorites />,
          },
          {
            path: "myRecipes",
            element: <MyRecipes />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

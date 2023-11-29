<<<<<<< HEAD
import { Home } from "./pages/Home";

export const App = () => {
  return <Home />;
=======
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export const App = () => {
  return <RouterProvider router={router} />;
>>>>>>> b3ea74faf01b3b1649a9573c5df66fb491421ad7
};

import { Outlet } from "react-router-dom";

import { Footer } from "../Footer";
import Header from "../Header";

export const MainLayout = () => {
  return (
    <>
      <div className="container">
        <Header />

        <Outlet />
      </div>
      <Footer />
    </>
  );
};

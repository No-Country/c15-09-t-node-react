import { Outlet } from "react-router-dom";

import { Footer } from "../Footer";
import Header from "../Header";

export const MainLayout = () => {
  return (
    <div >
      <Header />
      <div className="container">

        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

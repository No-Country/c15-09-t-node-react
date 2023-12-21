import { Outlet } from "react-router-dom";

import { Footer } from "../Footer";
import Header from "../Header";

export const MainLayout = () => {
  return (
    <div className="">
      <Header />
      <div className="container min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

import { Link } from "react-router-dom";
import beerMugImage from "../assets/images/noto_beer-mug.svg";

export const Navbar = () => {
  return (
    <header className="flex items-center md:flex-row flex-col justify-between mt-6 z-10 relative">
      <div className="flex justify-between items-center gap-20 md:mb-0 mb-4 text-neutral-50 text-2xl">
        <div to="/app">
          <div className="flex items-center">
            <img src={beerMugImage} alt="Descripcion de la imagen" className="w-10 h-10" />
            <h3 className="text-2x1 font-medium"> Brewers Cookbook</h3>
          </div>
        </div>
      </div>
      <nav>
        <ul className="flex gap-[33px] items-center md:flex-row flex-col ">
          <div className="flex md:gap-5 gap-5 md:order-1 order-2">
            <Link
              className="text-neutral-900 bg-neutral-50 px-4 py-[0.375rem] font-medium rounded-md"
              to="/login"
            >
              Iniciar sesion
            </Link>
            <Link
              className="text-neutral-900 bg-neutral-50 px-4 py-[0.375rem] font-medium rounded-md"
              to="/register"
            >
              Registrarse
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

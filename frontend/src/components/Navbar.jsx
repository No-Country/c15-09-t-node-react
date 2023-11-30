import { Link } from "react-router-dom";
import beerMugImage from "../assets/images/noto_beer-mug.svg";

export const Navbar = () => {
  return (
    <nav className="flex justify-between mb-36">
      <div className="flex">
        <img src={beerMugImage} className="w-10 h-10 font-medium mr-1"></img>
        <a className="text-white text-2xl flex items-center">Brewer&apos;s Cookbook</a>
      </div>
      <div className="flex items-center">
        <Link
          className="text-black bg-white px-4 py-[0.375rem] mr-6 font-medium rounded-md"
          to="/login"
        >
          Iniciar sesion
        </Link>
        <Link
          className="text-black bg-white px-4 py-[0.375rem] font-medium rounded-md"
          to="/register"
        >
          Registrarse
        </Link>
      </div>
    </nav>
  );
};

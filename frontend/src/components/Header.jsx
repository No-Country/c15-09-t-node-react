import { Logo } from "./Logo";

import { UserBtn } from "./navbar/UserBtn";
import { Link } from "react-router-dom";
import { DarkModeToggle } from "../assets/styles/components/DarkModeToggle";
export default function Header() {
  return (
    <header className="flex items-center lg:flex-row flex-col justify-between font-bold text-xl md:sticky  top-0 z-10 bg-[#D77533] text-white md:px-56 md:py-9 py-5">
      <div className="hidden ">
        <DarkModeToggle />
      </div>
      <div className="flex justify-between items-center gap-20 md:mb-0 mb-4">
        <Logo />
      </div>
      <nav className="">
        <ul className="flex gap-[33px] items-center md:flex-row flex-col ">
          <div className="flex flex-wrap justify-center md:gap-10 gap-10 md:order-1 order-2">
            <li>
              <Link to={"/app"}> Inicio </Link>
            </li>
            <li>
              <Link to={"/app/recipe"}> Recetas </Link>
            </li>
            <li>
              <Link to={"/app/styles"}> Estilos </Link>
            </li>
            <li>
              <Link to={"/app/favorites"}> Favoritos </Link>
            </li>
            <li className="md:block">
              <DarkModeToggle />
            </li>
            <li className="md:hidden block">
              <Link
                className="bg-secondary hover:bg-primary transition-colors py-2 px-3 text-white font-bold rounded-lg"
                to={"/app/create"}
              >
                Crear
              </Link>
            </li>
          </div>
          <div className="flex md:gap-10 gap-10 items-center order-1 md:order-2">
            <li className="md:block hidden">
              <Link
                className="bg-secondary hover:bg-primary transition-colors py-2 px-3 text-white font-bold rounded-lg"
                to={"/app/create"}
              >
                Crear
              </Link>
            </li>

            <li className="z-10 ">
              <UserBtn />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

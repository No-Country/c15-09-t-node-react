import { Outlet } from "react-router-dom";
import { Logo } from "../Logo";
import { Search } from "../navbar/Search";
import { UserBtn } from "../navbar/UserBtn";
import { Link } from "react-router-dom";
import { DarkModeToggle } from "../../assets/styles/components/DarkModeToggle";

export const MainLayout = () => {
  return (
    <div className="container">
      <header className="flex items-center md:flex-row flex-col justify-between mt-[57px]">
        <div className="flex justify-between items-center gap-20 md:mb-0 mb-4">
          <Logo />
          <div className="md:hidden block">
            <DarkModeToggle />
          </div>
        </div>
        <nav>
          <ul className="flex gap-[33px] items-center md:flex-row flex-col ">
            <div className="flex md:gap-10 gap-10 md:order-1 order-2">
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
              <li className="md:block hidden">
                <DarkModeToggle />
              </li>
              <li>
                <Search />
              </li>
              <li className="z-10">
                <UserBtn />
              </li>
            </div>
          </ul>
        </nav>
      </header>

      <Outlet />
    </div>
  );
};

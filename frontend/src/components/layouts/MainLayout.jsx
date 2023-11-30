import { Outlet } from "react-router-dom";
import { Logo } from "../Logo";
import { Search } from "../navbar/Search";
import { UserBtn } from "../navbar/UserBtn";

export const MainLayout = () => {
  return (
    <div className="container">
      <header className="flex items-center justify-between mt-[57px]">
        <Logo />
        <nav>
          <ul className="flex gap-[33px] items-center text-gray">
            <li>
              <a href="#!">Inicio</a>
            </li>
            <li>
              <a href="#!">Recetas</a>
            </li>
            <li>
              <a href="#!">Estilos</a>
            </li>
            <li>
              <a
                className="bg-secondary hover:bg-primary transition-colors py-2 px-3 text-white font-bold rounded-lg"
                href="#!"
              >
                Crear
              </a>
            </li>
            <li>
              <Search />
            </li>
            <li className="z-10">
              <UserBtn />
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </div>
  );
};

import { Link } from "react-router-dom";
import { useState } from "react";

export const UserBtn = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleLogout = () => {
    console.log("Cerrar sesión");
    window.location.href = "/";
  };

  return (
    <div className="navbar relative">
      <div className="user-info" onClick={handleToggleMenu}>
        <img
          className="h-[28px] w-[28px]"
          src="https://i.postimg.cc/YjKcp3sw/Ellipse-1.png"
          alt="logo"
        />
      </div>

      {showMenu && (
        <div className="dropdown-menu absolute top-full right-0 mt-2 bg-white border rounded shadow-md">
          <ul className="py-1">
            <li>
              <Link to="/perfil" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Perfil
              </Link>
            </li>
            <li>
              <Link to="/configuracion" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Configuración
              </Link>
            </li>
            <li
              onClick={() => {
                handleToggleMenu();
                handleLogout();
              }}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
            >
              Cerrar sesión
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

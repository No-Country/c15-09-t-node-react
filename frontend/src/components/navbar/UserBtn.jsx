import { Link } from "react-router-dom";
import { useState } from "react";

export const UserBtn = () => {
  const [showMenu, setShowMenu] = useState(false);
  let timeoutId;

  const handleToggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleMouseEnter = () => {
    // Cancelar el cierre automático si el mouse vuelve antes de que se complete el temporizador
    clearTimeout(timeoutId);
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    // Establecer un temporizador para ocultar el menú después de 2 segundos
    timeoutId = setTimeout(() => {
      setShowMenu(false);
    }, 500);
  };

  const handleLogout = () => {
    console.log("Cerrar sesión");
    window.location.href = "/";
  };

  return (
    <div
      className="navbar relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="user-info">
        <img
          className="h-[28px] w-[28px]"
          src="https://i.postimg.cc/YjKcp3sw/Ellipse-1.png"
          alt="logo"
        />
      </div>

      {showMenu && (
        <div className="dropdown-menu absolute top-full text-black bg-white right-0 mt-2  border rounded shadow-md">
          <ul className="py-1">
            <li>
              <Link
                to="/app/profile/recipeFavorites"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
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

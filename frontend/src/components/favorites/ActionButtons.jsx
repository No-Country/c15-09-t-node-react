import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getLastPath } from "../../utils/path";

const routes = [
  {
    href: "/app/profile/recipeFavorites",
    text: "Recetas Favoritas",
  },
  {
    href: "/app/profile/myRecipes",
    text: "Mis recetas",
  },
];

export const ActionButtons = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("/app/profile/recipeFavorites");

  useEffect(() => {
    setCurrentPath(getLastPath(location.pathname));
  }, [location.pathname]);

  return (
    <div className="flex gap-5 text-base mt-14 text-white justify-center">
      {routes.map(({ text, href }) => (
        <Link
          key={href}
          to={href}
          className={`${
            getLastPath(href) === currentPath ? "bg-primary" : "bg-secondary"
          } py-[14px] px-5 rounded-lg hover`}
        >
          {text}
        </Link>
      ))}
    </div>
  );
};

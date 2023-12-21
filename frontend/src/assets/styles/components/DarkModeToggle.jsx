import { useEffect, useState } from "react";

export const DarkModeToggle = () => {
  // Obtener el estado inicial del modo oscuro desde localStorage
  const initialDarkMode = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    // Actualizar la clase del cuerpo y almacenar el estado en localStorage
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <input
        className="hidden"
        id={`react-switch-new`}
        type="checkbox"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <label
        className={`flex items-center justify-between cursor-pointer w-14 h-7   rounded-full p-1 transition duration-200 ease-in-out
        ${darkMode ? " bg-blue-800" : " bg-blue-400"}`}
        htmlFor={`react-switch-new`}
        onClick={toggleDarkMode}
      >
        <span
          className={`block w-5 h-5  rounded-full shadow-md transition-transform ease-in-out ${
            darkMode ? "translate-x-7 bg-white" : "translate-x-0 bg-white"
          }`}
        />
      </label>
    </>
  );
};

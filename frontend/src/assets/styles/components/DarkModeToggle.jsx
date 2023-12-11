import { useEffect, useState } from "react";

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
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
        className={`flex items-center justify-between cursor-pointer w-14 h-7 bg-blue-400 dark:bg-blue-800 rounded-full p-1 transition duration-200 ease-in-out`}
        htmlFor={`react-switch-new`}
      >
        <span
          className={`block w-5 h-5 bg-white dark:bg-blue-800 rounded-full shadow-md transform duration-200 ease-in-out ${
            darkMode ? "translate-x-7" : "translate-x-0"
          }`}
        />
      </label>
    </>
  );
};

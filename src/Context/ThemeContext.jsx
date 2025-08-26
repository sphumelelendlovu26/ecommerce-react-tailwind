import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../functions/localStorage";
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => getLocalStorage("theme"), "light");
  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  useEffect(() => {
    document.body.className =
      theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black";
  }, [theme]);
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    setLocalStorage("theme", theme);
    console.log(localStorage);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

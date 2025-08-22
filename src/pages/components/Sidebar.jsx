import { Link } from "react-router-dom";
import { CgDarkMode } from "react-icons/cg";
import { MdLightMode } from "react-icons/md";
import { ThemeContext } from "../../Context&functions/ThemeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={` flex-row items-center justify-evenly  w-1/2 rounded-md ml-5 border-indigo-200 grid-rows-1 hidden sm:flex`}
    >
      <Link to="/" className="link ">
        Home
        <span className="underliner"></span>
      </Link>
      <Link to="/products" className="link">
        products<span className="underliner"></span>
      </Link>

      <button
        onClick={toggleTheme}
        title="Change Theme"
        className="mt-12 flex items-center"
      >
        <span>{theme === "dark" ? "light " : "Dark "}</span>
        <span>{theme === "dark" ? <MdLightMode /> : <CgDarkMode />}</span>
      </button>
    </div>
  );
};

export default Sidebar;

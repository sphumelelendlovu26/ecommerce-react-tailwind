import { Link } from "react-router-dom";
import { useRef, useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import SearchBar from "../SearchBar";
import { CartContext } from "../../Context/CartContext";
import { FaCartPlus } from "react-icons/fa6";
import { CgDarkMode } from "react-icons/cg";
import { MdLightMode } from "react-icons/md";

const Navbar = ({ userInput, setUserInput, setQuery }) => {
  const inputRef = useRef(null);

  // contexts
  const { theme, toggleTheme } = useContext(ThemeContext);
  const globalCartState = useContext(CartContext);
  const state = globalCartState.state;

  console.log(state);

  const bgColor = theme === "dark" ? "dark" : "bg-white text-black ";

  return (
    <nav
      className={`${bgColor}  flex justify-between  overflow-hidden sm:overflow-auto    sm:h-auto contentContainer  border-none col-span-2 fixed top-0  left-0 z-50 `}
    >
      <h1>Logo</h1>
      <div className="flex gap-4">
        <Link to="/" className="link">
          Home
          <span className="underliner"></span>
        </Link>
        <Link to="/products" className="link">
          products<span className="underliner"></span>
        </Link>
        <Link className="link">
          <span className="underliner"></span>
        </Link>
      </div>
      <SearchBar
        inputRef={inputRef}
        userInput={userInput}
        setQuery={setQuery}
        setUserInput={setUserInput}
      />
      <Link to="/cart">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full  text-yellow-400  font-semibold cursor-pointer relative">
          <FaCartPlus alt="View Cart " />
          <span className="absolute bg-indigo-600 rounded-full size-4  top-0 flex items-center justify-center -right-4 text-white font-thin ">
            {state.length}
          </span>
        </div>
      </Link>
      <button onClick={toggleTheme} title="Change Theme">
        {theme === "dark" ? <MdLightMode /> : <CgDarkMode />}
      </button>
    </nav>
  );
};

export default Navbar;

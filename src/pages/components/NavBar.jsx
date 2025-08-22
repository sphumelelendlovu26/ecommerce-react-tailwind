import { Link } from "react-router-dom";
import { useRef, useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../Context&functions/ThemeContext";
import SearchBar from "../SearchBar";
import { CartContext } from "../../Context&functions/CartContext";
import { FaCartPlus } from "react-icons/fa6";
import { CgDarkMode } from "react-icons/cg";
import { MdLightMode } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { RiMenuFold2Fill, RiMenuFoldFill } from "react-icons/ri";
import Sidebar from "./Sidebar";

const Navbar = ({ userInput, setUserInput, setQuery }) => {
  const inputRef = useRef(null);
  const sideBarRef = useRef();

  // contexts
  const { theme, toggleTheme } = useContext(ThemeContext);
  const globalCartState = useContext(CartContext);
  const state = globalCartState.state;

  console.log(state);

  const bgColor = theme === "dark" ? "dark text-white" : "bg-white text-black ";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isMenuOpen &&
        sideBarRef.current &&
        !sideBarRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  });

  const sidebarVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 20 },
  };

  return (
    <motion.nav
      layout
      className={`${bgColor} max-w-[1200px] justify-self-center flex-row   w-screen  sm:h-auto contentContainer flex  sm:fixed top-0  left-0 z-50 sm:justify-around `}
    >
      <motion.div className="flex w-full sm:w-full  justify-around">
        <SearchBar
          inputRef={inputRef}
          userInput={userInput}
          setQuery={setQuery}
          setUserInput={setUserInput}
        />
        <div className="flex items-center gap-2 px-3 py-1 rounded-full  text-yellow-400  font-semibold cursor-pointer relative  ">
          <Link to="/cart">
            <FaCartPlus alt="View Cart " />
            <span className="absolute bg-indigo-600 rounded-full size-3  top-0 flex items-center justify-center -right-3 text-white font-thin text-xs">
              {state.length}
            </span>
          </Link>
        </div>
        <button
          onClick={() => toggleMenu()}
          className={`sm:hidden z-[1000] `}
          title="Open Menu"
          id="menuBtn"
        >
          {isMenuOpen === true ? <RiMenuFold2Fill /> : <RiMenuFoldFill />}{" "}
        </button>{" "}
        <Sidebar />
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`${bgColor} bg-blue-500 absolute right-0 top-10 w-1/3 flex flex-col items-center rounded-md h-[500%] justify-center gap-[1rem] border border-indigo-300`}
            variants={sidebarVariants}
            initial="open"
            animate={isMenuOpen ? "open" : "closed"}
            exit="closed"
            transition={{
              duration: 0.5,
            }}
            ref={sideBarRef}
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

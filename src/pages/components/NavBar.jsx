import { Link } from "react-router-dom";
import { useRef, useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import SearchBar from "../SearchBar";
import { CartContext } from "../../Context/CartContext";
import { FaCartPlus } from "react-icons/fa6";
import { CgDarkMode } from "react-icons/cg";
import { MdLightMode } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { RiMenuFold2Fill, RiMenuFoldFill } from "react-icons/ri";

const Navbar = ({ userInput, setUserInput, setQuery }) => {
  const inputRef = useRef(null);
  const sideBarRef = useRef();

  // contexts
  const { theme, toggleTheme } = useContext(ThemeContext);
  const globalCartState = useContext(CartContext);
  const state = globalCartState.state;

  console.log(state);

  const bgColor = theme === "dark" ? "dark" : "bg-white text-black ";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.addEventListener("mousedown", handleOutsideClick);
  });

  const sidePanelVariants = {
    open: {
      opacity: 1,
      x: 0,
    },
    close: {
      opacity: 0,
      x: 100,
    },
  };

  return (
    <motion.nav
      layout
      className={`${bgColor} max-w-[1200px] justify-self-center sm:flex-row flex flex-col  w-screen  sm:h-auto contentContainer    sm:fixed top-0  left-0 z-50 sm:justify-around  `}
    >
      <motion.div className="flex w-full sm:w-[50%]  justify-between px-4 ">
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
        </button>
      </motion.div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={sideBarRef}
            variants={sidePanelVariants}
            layout
            initial={isMenuOpen && { opacity: 0, x: 100 }}
            animate={isMenuOpen ? "open" : "close"}
            transition={{
              duration: 0.3,
              type: "tween",
              ease: "linear",
            }}
            exit="close"
            className={` ${isMenuOpen === true ? "h-[1000%] w-[50%] block" : "w-0 hidden sm:block"} sideBar gap-3 absolute  right-0 top-12  flex flex-col items-center border-r-0 rounded-r-none  ${bgColor} z-100 rounded-md border border-indigo-200
             sm:flex-row sm:border-0 sm:bg-transparent-blue
            sm:justify-evenly px-1  shadow-lg
            `}
          >
            <Link to="/" className="link ">
              Home
              <span className="underliner"></span>
            </Link>
            <Link to="/products" className="link">
              products<span className="underliner"></span>
            </Link>
            <Link className="link">
              <span className="underliner"></span>
            </Link>

            <button
              onClick={toggleTheme}
              title="Change Theme"
              className="mt-12 border"
            >
              {theme === "dark" ? <MdLightMode /> : <CgDarkMode />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

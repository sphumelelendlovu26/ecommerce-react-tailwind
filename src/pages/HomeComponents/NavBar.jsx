import { Link } from "react-router-dom";
import { useRef, useEffect, useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const Navbar = ({ userInput, setUserInput, setQuery }) => {
  const inputRef = useRef(null);

  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const bgColor = theme === "dark" ? "dark" : "bg-white text-black ";

  return (
    <nav
      className={`${bgColor} flex justify-between contentContainer flex-rows border-none col-span-2 fixed top-0  left-0 z-50`}
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
          Favorites
          <span className="underliner"></span>
        </Link>
      </div>
      <div>
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setQuery(userInput);
            }
          }}
          ref={inputRef}
          type="text"
          placeholder="Search"
          className="border-1 p-2 rounded outline-0"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          className="bg-indigo-500 hover:cursor-pointer rounded text-indigo-50 "
          onClick={() => setQuery(userInput)}
        >
          search
        </button>
      </div>
      <div className="flex gap-4"></div>
      <button onClick={toggleTheme}>
        {theme === "dark" ? "light" : "dark"}
      </button>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const Navbar = ({ userInput, setUserInput }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <nav className="flex justify-between contentContainer flex-rows col-span-2 w-aut  ">
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
            if (e.target.value === "Enter") {
              setUserInput(e.target.value);
            }
          }}
          ref={inputRef}
          type="text"
          placeholder="Search"
          className="border-1 p-2 rounded outline-0"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button className="bg-indigo-500 hover:cursor-pointer rounded text-indigo-50">
          search
        </button>
      </div>
      <div className="flex gap-4">
        <Link className="link">
          Login<span className="underliner"></span>
        </Link>
        <Link className="link">
          Register<span className="underliner"></span>
        </Link>
        <Link className="link">
          Cart<span className="underliner"></span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

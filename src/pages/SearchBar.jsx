import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ inputRef, userInput, setUserInput, setQuery }) => {
  const navigate = useNavigate();

  function handleSearch() {
    setQuery(userInput);
    navigate("/products");
  }

  return (
    <div className=" h-auto   flex ">
      <input
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        ref={inputRef}
        type="text"
        placeholder="Search"
        className="border border-indigo-500 p-2 rounded outline-none w-auto flex-1 shrink-1 rounded-r-none"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        className="bg-indigo-500 hover:cursor-pointer h-full rounded-l-none rounded text-indigo-50 px-3 py-1 "
        onClick={() => handleSearch()}
        alt="search"
        title="search"
      >
        <FaSearch />
      </button>
    </div>
  );
};
export default SearchBar;

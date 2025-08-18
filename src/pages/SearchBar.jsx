import { FaSearch } from "react-icons/fa";

const SearchBar = ({ inputRef, userInput, setUserInput, setQuery }) => (
  <div className=" h-auto flex w-[40%]">
    <input
      onKeyDown={(e) => e.key === "Enter" && setQuery(userInput)}
      ref={inputRef}
      type="text"
      placeholder="Search"
      className="border border-indigo-500 p-2 rounded outline-none flex-1 rounded-r-none"
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
    />
    <button
      className="bg-indigo-500 hover:cursor-pointer h-full rounded-l-none rounded text-indigo-50 px-3 py-1 "
      onClick={() => setQuery(userInput)}
      alt="search"
      title="search"
    >
      <FaSearch />
    </button>
  </div>
);
export default SearchBar;

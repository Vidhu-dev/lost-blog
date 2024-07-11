import { useState } from "react";
import SearchButton from "./SearchButton";

function SearchBar({
  name,
  padding = "pl-1 pr-5",
  placeholder = "Search posts...",
  textSize = "text-base",
  fontWeight = "font-base",
  onClick,
  color,
  rounded = "rounded-full",
}) {
  const [query, setQuery] = useState("");
  function handleSearch() {
    console.log(query);
    setQuery("");
  }

  return (
    <div
      className={`border border-dark ${rounded} flex items-center justify-center`}
    >
      <SearchButton onClick={handleSearch} />
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className={`hidden sm:block ${rounded} ${padding} ${textSize} ${fontWeight} bg-background-100 focus:outline-none`}
      />
    </div>
  );
}

export default SearchBar;

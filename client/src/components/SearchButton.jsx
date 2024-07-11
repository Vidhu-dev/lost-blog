import SearchIcon from "../assets/SearchIcon";

function SearchButton({ padding = "px-1.5 py-1.5", onClick }) {
  return (
    <button
      className={`${padding} w-7 rounded-full bg-background-200`}
      onClick={onClick}
    >
      <SearchIcon fillColor="fill-background-500" />
    </button>
  );
}

export default SearchButton;

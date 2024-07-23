import SearchIcon from "../assets/SearchIcon";

function SearchButton({ padding = "px-1.5 py-1.5", onClick }) {
  return (
    <button
      className={`${padding} rounded-full bg-background-200`}
      onClick={onClick}
    >
      <SearchIcon fillColor="fill-text" zWidth={0.045} />
    </button>
  );
}

export default SearchButton;

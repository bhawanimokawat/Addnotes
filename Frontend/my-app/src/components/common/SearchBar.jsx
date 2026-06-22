function SearchBar({ search, setSearch }) {

   
  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control search-input mx-3"
        placeholder="Search Notes..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
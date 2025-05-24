import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="search">
      <div className="">
        <img src="/public/search.svg" alt="Search Icon" />
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;

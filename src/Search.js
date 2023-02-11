import React from "react";
import { GlobalContext } from "./context";

const Search = () => {
  const { search, setSearch, IsError } = GlobalContext();
  return (
    <div className="search-section">
      <h2 className="search-head">Search your favorite movie 🔎</h2>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <input
            type="text"
            placeholder="Avengers"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
      <div className="card-error">
        <p>{IsError.show && IsError.msg}</p>
      </div>
    </div>
  );
};

export default Search;

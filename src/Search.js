import React from "react";
import { GlobalContext } from "./context";
import SearchImg from './searchImg.png'

const Search = () => {
  const { search, setSearch, IsError } = GlobalContext();
  return (
    <div className="search-section">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="UpInput">
          <input
            type="text"
            placeholder="search movie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img className="searchImg" src={SearchImg} alt="SearchImg" />
        </div>
      </form>
      <div className="card-error">
        <p>{IsError.show && IsError.msg}</p>
      </div>
    </div>
  );
};

export default Search;

import React from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "./context";

const Movies = () => {
  const { Movies } = GlobalContext(); //The variables name should be as same the Hook, e.g. "Movies"
  return (
    <>
      <div className="movie-page">
        <div className="container grid grid-4-col">
        {Movies.map((element) => {
        return (
          <NavLink to={`movie/${element.imdbID}`} key={element.imdbID}>
          <div className="card" >
            <div className="card-info">
              <h2>{element.Title}</h2>
              <img src={element.Poster} alt={element.Title + "'s poster"} />
            </div>
          </div>
          </NavLink>
        );
      })}
        </div>
      </div>
    </>
  );
};

export default Movies;

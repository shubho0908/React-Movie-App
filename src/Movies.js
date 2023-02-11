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
            const MovieTitle = (element.Title).substring(0, 15)
            return (
              <NavLink to={`movie/${element.imdbID}`} key={element.imdbID}>
                <div className="card">
                  <div className="card-info">
                    <p className="hd-tag">HD</p>
                    <img
                      className="poster"
                      src={element.Poster}
                      alt={MovieTitle + "'s poster"}
                    />
                    <div className="about-movie">
                      <h2>
                        {MovieTitle.length >= 15
                          ? `${MovieTitle}...`
                          : MovieTitle}
                      </h2>
                      <h2 className="type">{element.Type}</h2>
                    </div>
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

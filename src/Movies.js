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
                <div className="card">
                  <div className="card-info">
                    <p className="hd-tag">HD</p>
                    <img
                      className="poster"
                      src={element.Poster}
                      alt={element.Title + "'s poster"}
                    />
                    <div className="about-movie">
                      <h2>
                        {element.Title.length <= 20
                          ? element.Title
                          : element.Title.slice(0, 20) + ".."}
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

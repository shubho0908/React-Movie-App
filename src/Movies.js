import React from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "./context";
import Footer from "./Footer";
import errorimg from "./error-img.jpg";

const Movies = () => {
  const { Movies, search, IsLoading, IsError } = GlobalContext(); //The variables name should be as same the Hook, e.g. "Movies"
  if (IsLoading) {
    return (
      <div>
        <div className="loading">
          {IsError.msg === "Movie not found!" ||
          IsError.msg === "Incorrect IMDb ID."
            ? ""
            : "Loading..."}
        </div>
      </div>
    );
  }

  document.title = `Movie HD`;

  return (
    <>
      <div className="movie-page">
        <h3 className="results">
          Results for{" "}
          <b>
            <u>
              <em>{search}</em>
            </u>
          </b>
        </h3>
        <div className="container grid grid-4-col">
          {Movies.map((element) => {
            const MovieTitle = element.Title.substring(0, 15);
            return (
              <NavLink to={`movie/${element.imdbID}`} key={element.imdbID}>
                <div className="card">
                  <div className="card-info">
                    <p className="hd-tag">
                      {element.Poster === "N/A" ? "" : "HD"}
                    </p>
                    <img
                      className="poster"
                      src={element.Poster === "N/A" ? errorimg : element.Poster}
                      alt={MovieTitle + "'s poster"}
                    />
                    <div className="about-movie">
                      <div className="mv-data">
                        <h2>
                          {MovieTitle.length >= 15
                            ? `${MovieTitle}...`
                            : MovieTitle}
                        </h2>
                        <p className="mv-year">{element.Year}</p>
                      </div>
                      <h2 className="type">{element.Type}</h2>
                    </div>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Movies;

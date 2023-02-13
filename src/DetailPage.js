import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "./context";
import "./DetailPage.css";
import ratingImg from "./ratingImg.png";
import Comments from "./Comments";
import mainLogo from './main-logo.png'

const DetailPage = () => {
  const { id } = useParams();
  const [IsLoading, setIsLoading] = useState(true);
  const [Movies, setMovies] = useState("");

  const getMovies = async (url) => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setIsLoading(false);
        setMovies(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let TimeOut = setTimeout(() => {
      // "i" for id & "s" for search
      getMovies(`${API_URL}&i=${id}`);
    }, 400);

    return () => clearTimeout(TimeOut);
  }, [id]);

  if (IsLoading) {
    return (
      <div>
        <div className="loading">Loading...</div>
      </div>
    );
  }

  const favicon = document.getElementById("favicon");
  favicon.setAttribute("href", `${mainLogo}`);
  document.title = `Movie HD - ${Movies.Title}`

  return (
    <>
      <div className="container details-card">
        <img className="movie-poster" src={Movies.Poster} alt="" />
        <div className="movies-data">
          <div className="movie-title">
            <h2 className="title-heading">{Movies.Title}</h2>
          </div>
          <div className="rating-data">
            <p className="HD-tag">HD</p>
            <div className="rating">
              <img className="rated" src={ratingImg} alt="Rating" />
              {Movies.imdbRating}
            </div>
            <div className="runtime">{Movies.Runtime}</div>
          </div>
          <div className="rest-data">
            <div className="description">{Movies.Plot}</div>
            <div className="other-data">
              <div className="country">Country: {Movies.Country}</div>
              <div className="genre">Genre: {Movies.Genre}</div>
              <div className="release">Released: {Movies.Released}</div>
              <div className="director">Director: {Movies.Director}</div>
              <div className="production">Production: {Movies.Production}</div>
              <div className="casts">Casts: {Movies.Actors}</div>
            </div>
          </div>
          <button className="back">
            <Link className="inside-back" to="/">
              &larr; Go back
            </Link>
          </button>
        </div>
      </div>
      <Comments/>
    </>
  );
};

export default DetailPage;

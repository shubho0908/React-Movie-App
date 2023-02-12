import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "./context";
import "./DetailPage.css";
import ratingImg from "./ratingImg.png";
import Comment from "./comment-user.png";
import Time from './time.png'

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
      <div className="container comments">
        <div className="comment-head">
          <p style={{ fontSize: "22px" }}>Comments</p>
          <p className="totalComments">3</p>
        </div>
        <div className="users-comment">
          <div className="user-1">
            <img src={Comment} alt="" className="img1" />
            <div className="user-data">
              <div className="user-name">Chandan Sahu
              <div className="time">
                <img className="imgtime" src={Time} alt="" />
                <div className="time-text">6 hours ago</div>
              </div>
              </div>
              <div className="UserComment">Wow, I just watched this film and I have to say it was incredible! The storytelling was so well-crafted, with complex characters and thought-provoking themes that kept me engaged from start to finish. The acting was also top-notch, bringing a sense of authenticity to the story. I highly recommend this movie to anyone looking for a compelling and insightful film.</div>
            </div>
          </div>
        </div>
        <div className="users-comment">
          <div className="user-1">
            <img src={Comment} alt="" className="img1" />
            <div className="user-data">
              <div className="user-name">Sanket Dewangan
              <div className="time">
                <img className="imgtime" src={Time} alt="" />
                <div className="time-text">1 day ago</div>
              </div>
              </div>
              <div className="UserComment">This film is a masterpiece! The writing and directing were phenomenal, and the performances were outstanding. It was a thought-provoking and emotionally resonant exploration of its central themes that left me thinking about it long after it was over.</div>
            </div>
          </div>
        </div>
        <div className="users-comment">
          <div className="user-1">
            <img src={Comment} alt="" className="img1" />
            <div className="user-data">
              <div className="user-name">Ranjeet Singh
              <div className="time">
                <img className="imgtime" src={Time} alt="" />
                <div className="time-text">3 days ago</div>
              </div>
              </div>
              <div className="UserComment">I can't say enough good things about this movie. It was thought-provoking, beautifully crafted, and deeply affecting. It's the kind of film that stays with you long after you've watched it, and I can't wait to see it again.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;

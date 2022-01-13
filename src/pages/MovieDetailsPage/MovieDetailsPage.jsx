import React, { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate, Outlet } from "react-router-dom";
import "./MovieDetailsPage.scss";
import { pageRequest } from "../../services/moviesRequest";
import defaultImage from "../../images/no-photo.png";
import Loader from "../../components/Loader/Loader";

export default function MovieDetailsPage() {
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState("");
  const movieId = useParams().movieId;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    pageRequest(movieId)
      .then(({ data }) => {
        setMovieData(data);
        setError("");
      })
      .catch((error) => setError("Opps, something went wrong"))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <section className="movie">
      <button onClick={() => navigate(-1)} className="movie__button movies__btn" type="button">
        {"<- Go back"}
      </button>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {!error && movieData && (
        <>
          {" "}
          <div className="movie__content-wrapper">
            <img
              width={300}
              src={
                movieData.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${movieData.poster_path}`
                  : defaultImage
              }
              alt=""
              className="movie__img"
            />
            <div className="movie__text-wrapper">
              <h2 className="movie__headline">{movieData.title}</h2>
              <p className="movie__text">User score: {movieData.vote_average * 10}%</p>
              <h3 className="movie__caption">Overview</h3>
              <p className="movie__text">{movieData.overview}</p>
              <h3 className="movie__caption">Genres:</h3>
              <p className="movie__text">
                {movieData.genres.map((item) => (
                  <span key={item.id}> {item.name} </span>
                ))}{" "}
              </p>
            </div>
          </div>
          <h2 className="movie__headline">Additional information</h2>
          <NavLink
            className={({ isActive }) =>
              isActive ? "movie__link movie__link--active" : "movie__link"
            }
            to="cast/"
          >
            Cast
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "movie__link movie__link--active" : "movie__link"
            }
            to="reviews/"
          >
            Reviews
          </NavLink>
          <Outlet dodo={50} />
        </>
      )}
    </section>
  );
}

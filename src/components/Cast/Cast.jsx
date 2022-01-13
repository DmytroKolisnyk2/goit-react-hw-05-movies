import React, { useState, useEffect } from "react";
import { castRequest } from "../../services/moviesRequest";
import { useParams } from "react-router-dom";
import "./Cast.scss";
import defaultImage from "../../images/no-photo.png";
import Loader from "../Loader/Loader";

export default function Cast() {
  const movieId = useParams().movieId;
  const [castData, setCastData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    castRequest(movieId)
      .then(({ data }) => {
        setCastData(data.cast);
        setError("");
      })
      .catch((error) => setError("Opps, something went wrong"))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <section className="cast">
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {castData.length === 0 && <h2>We will add cast soon</h2>}
      {!error &&
        castData.length > 0 &&
        castData.map((item) => (
          <div key={item.id} className="cast__wrapper">
            <img
              className="cast__image"
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${item.profile_path}`
                  : defaultImage
              }
              alt={item.name}
            />
            <h3 className="cast__name">{item.name}</h3>
          </div>
        ))}
    </section>
  );
}

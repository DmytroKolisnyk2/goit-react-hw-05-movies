import React, { useState, useEffect } from "react";
import { reviewsRequest } from "../../services/moviesRequest";
import { useParams } from "react-router-dom";
import "./Reviews.scss";
import Loader from "../Loader/Loader";

export default function Reviews() {
  const movieId = useParams().movieId;
  const [reviewsData, setReviewsData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    reviewsRequest(movieId)
      .then(({ data }) => {
        setReviewsData(data.results);
        setError("");
      })
      .catch((error) => setError("Opps, something went wrong"))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <section className="reviews">
      {isLoading && <Loader />}
      {error && !isLoading && <h2>{error}</h2>}
      {reviewsData.length === 0 && <h2>No reviews yet</h2>}
      {!error &&
        reviewsData.length > 0 &&
        reviewsData.map((item) => (
          <div key={item.id} className="reviews__wrapper">
            <h3 className="reviews__author">{item.author}</h3>
            <span className="reviews__date">{parseInt(item.created_at)}</span>
            <p className="reviews__text">{item.content}</p>
          </div>
        ))}
    </section>
  );
}

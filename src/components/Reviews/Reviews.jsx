import React, { useState, useEffect } from "react";
import { reviewsRequest } from "../../services/moviesRequest";
import { useParams } from "react-router-dom";
import './Reviews.scss'

export default function Reviews() {
  const movieId = useParams().movieId;
  const [reviewsData, setReviewsData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    reviewsRequest(movieId)
      .then(({ data }) => {
        setReviewsData(data.results);
        setError("");
        console.log(data.results);
      })
      .catch((error) => setError("Opps, something went wrong"));
  }, [movieId]);

  return (
    <section className="reviews">
      {error && <h2>{error}</h2>}
      {reviewsData.length === 0 && <h2>No reviews yet</h2>}
      {!error &&
        reviewsData.length > 0 &&
        reviewsData.map((item) => (
          <div className="reviews__wrapper">
            <h3 className="reviews__author">{item.author}</h3>
            <span className="reviews__date">{parseInt(item.created_at)}</span>
            <p className="reviews__text">{item.content}</p>
          </div>
        ))}
    </section>
  );
}

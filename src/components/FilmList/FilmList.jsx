import "./FilmList.scss";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { movies } from "../../services/routes.json";


const FilmList = ({ listData }) => {
  return (
    <ul className="trending">
      {listData.map((item) => (
        <li key={item.id} className="trending__item">
          {
            <Link className="trending__link" to={`${movies}/${item.id}`}>
              {item.title}
            </Link>
          }
        </li>
      ))}
    </ul>
  );
};

export default FilmList;

FilmList.propTypes = {
  listData: PropTypes.array.isRequired,
};

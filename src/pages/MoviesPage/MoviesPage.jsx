import React, { Component } from "react";
import "./MoviesPage.scss";
import { Link } from "react-router-dom";
import { queryRequest } from "../../services/moviesRequest";
import Loader from "..//../components/Loader/Loader";

class MoviesPage extends Component {
  state = {
    filmsData: [],
    error: "",
    inputValue: "",
    isLoading: false,
  };
  handleInput = ({ target }) => this.setState({ inputValue: target.value });

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    queryRequest(this.state.inputValue)
      .then(({ data }) =>
        data.results.length === 0
          ? this.setState({ error: "No films found", filmsData: data.results })
          : this.setState({ error: "", filmsData: data.results })
      )
      .catch(() => this.setState({ error: "Opps, something went wrong" }))
      .finally(() => this.setState({ isLoading: false}));
  };
  render() {
    return (
      <section className="movies">
        <form onSubmit={this.handleOnSubmit} className="movies__form">
          <input
            onChange={this.handleInput}
            value={this.state.inputValue}
            type="text"
            className="movies__input"
          />
          <button type="submit" className="movies__btn">
            search
          </button>
        </form>
        {this.state.isLoading && <Loader />}
        {this.state.error && <h3>{this.state.error}</h3>}
        <ul className="trending">
          {this.state.filmsData.map((item) => (
            <li key={item.id} className="trending__item">
              {
                <Link className="trending__link" to={`/movies/${item.id}`}>
                  {item.title}
                </Link>
              }
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default MoviesPage;

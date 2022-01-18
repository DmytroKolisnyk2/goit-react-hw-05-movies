import React, { Component } from "react";
import "./MoviesPage.scss";
import { queryRequest } from "../../services/moviesRequest";

import Loader from "..//../components/Loader/Loader";
import FilmList from "../../components/FilmList/FilmList";

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
      .finally(() => this.setState({ isLoading: false }));
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
        <FilmList listData={this.state.filmsData} />
      </section>
    );
  }
}

export default MoviesPage;

import React, { Component } from "react";
import { popularRequest } from "../../services/moviesRequest";
import "./HomePage.scss";
import FilmList from "../../components/FilmList/FilmList";

class HomePage extends Component {
  state = {
    filmsData: [],
    error: "",
  };

  componentDidMount() {
    popularRequest()
      .then(({ data }) => this.setState({ filmsData: data.results, error: "" }))
      .catch(() => this.setState({ error: "Opps, something went wrong" }));
  }

  render() {
    return (
      <section className="home">
        <h2 className="home__headline">Trending today</h2>
        {this.state.error && <h3>{this.state.error}</h3>}
       <FilmList listData={this.state.filmsData} />
      </section>
    );
  }
}

export default HomePage;

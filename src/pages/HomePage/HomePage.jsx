import { Link } from "react-router-dom";
import React, { Component } from "react";
import { popularRequest } from "../../services/moviesRequest";
import "./HomePage.scss";

class HomePage extends Component {
  state = {
    filmsData: [],
    error: "",
  };

  componentDidMount() {
    popularRequest()
      .then(({ data }) => this.setState({ filmsData: data.results, error: "" }))
      .catch(() => this.setState({error:'Opps, something went wrong'}));
  }

  render() {
    return (
      <section className="home">
        <h2 className="home__headline">Trending today</h2>
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

export default HomePage;

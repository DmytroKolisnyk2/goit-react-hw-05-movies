import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./pages/NotFound/NotFound";
import Cast from "./components/Cast/Cast";
import Reviews from "./components/Reviews/Reviews";
import "material-design-icons/iconfont/material-icons.css";
import ScrollTopArrow  from "./components/ScrollTopArrow/ScrollTopArrow";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast/" element={<Cast />} />
            <Route path="reviews/" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollTopArrow bgColor="tomato" />
      </>
    );
  }
}

export default App;

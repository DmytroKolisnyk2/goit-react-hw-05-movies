import React, { Component, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./pages/NotFound/NotFound";
import "material-design-icons/iconfont/material-icons.css";
import ScrollTopArrow from "./components/ScrollTopArrow/ScrollTopArrow";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage" /* webpackChunkName: 'Home' */));
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage/MoviesPage" /* webpackChunkName: 'Movies' */)
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: 'MovieDetails' */)
);
const Reviews = lazy(() =>
  import("./components/Reviews/Reviews" /* webpackChunkName: 'Reviews' */)
);
const Cast = lazy(() => import("./components/Cast/Cast" /* webpackChunkName: 'Cast' */));

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast/" element={<Cast />} />
              <Route path="reviews/" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ScrollTopArrow bgColor="tomato" />
      </>
    );
  }
}

export default App;

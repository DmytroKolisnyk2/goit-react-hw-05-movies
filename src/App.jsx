import React, { Component, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import "material-design-icons/iconfont/material-icons.css";

import NotFound from "./pages/NotFound/NotFound";

import NavBar from "./components/NavBar/NavBar";
import ScrollTopArrow from "./components/ScrollTopArrow/ScrollTopArrow";
import Cast from "./components/Cast/Cast";
import Reviews from "./components/Reviews/Reviews";
import LoaderModal from "./components/LoaderModal/LoaderModal";

const HomePage = lazy(() => import("./pages/HomePage/HomePage" /* webpackChunkName: 'Home' */));
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage/MoviesPage" /* webpackChunkName: 'Movies' */)
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: 'MovieDetails' */)
);

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Suspense fallback={<LoaderModal/>}>
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

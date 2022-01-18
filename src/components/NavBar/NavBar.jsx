import React from "react";
import { NavLink } from "react-router-dom";
import { home, movies } from "../../services/routes.json";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <header className="header">
      <nav className="header__menu">
        <NavLink
          to={home}
          className={({ isActive }) => (isActive ? "menu__link menu__link--active" : "menu__link")}
        >
          Home
        </NavLink>
        <NavLink
          to={movies}
          className={({ isActive }) => (isActive ? "menu__link menu__link--active" : "menu__link")}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';

import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <nav className={styles.Navigation}>
        <ul className={styles.NavList}>
          <li className={styles.NavListItem}>
            <NavLink
              to="/"
              exact
              className={styles.NavLink}
              activeClassName={styles.ActiveNavlink}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.NavListItem}>
          <NavLink
              to="/movies"
              className={styles.NavLink}
              activeClassName={styles.ActiveNavlink}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path='/movies/:movieId' component={MovieDetailsPage}></Route>
        <Route path='/movies' component={MoviesPage}></Route>
      </Switch>
    </>
  );
};

export default App;

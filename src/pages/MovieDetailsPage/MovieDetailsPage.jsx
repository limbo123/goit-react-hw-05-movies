import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import Cast from "../../components/Cast/Cast"
import Reviews from "../../components/Reviews/Reviews"

import styles from './MovieDetailsPage.module.css';

class MovieDetailsPage extends React.Component {
  state = {
    currentFilm: {},
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=170b9b9397b0574b7d603cba918ea1f4&language=en-US`
      )
      .then(res => {
        this.setState({
          currentFilm: res.data,
        });
      });
  }

  render() {
    return (
      <>
        <button type="button">Go back</button>
        {this.state.currentFilm.title && (
          <>
            <section className={styles.filmDetailsSect}>
              <img
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/original/${this.state.currentFilm.poster_path}`}
                alt={this.state.currentFilm.title}
              />
              <div className={styles.filmDetails}>
                <h1>{this.state.currentFilm.title}</h1>
                <p>User score: {this.state.currentFilm.vote_average}</p>
                <h3>Overview</h3>
                <p>{this.state.currentFilm.overview}</p>
                <h3>Genres</h3>
                <ul>
                  {this.state.currentFilm.genres.map(genre => {
                    return <li key={genre.name}>{genre.name}</li>;
                  })}
                </ul>
              </div>
            </section>
            <section className={styles.AdditionalInfoSect}>
                <h3>Additional Imformation</h3>
                <ul>
                    <li><Link to={`${this.props.match.url}/cast`}>Cast</Link></li>
                    <li><Link to={`${this.props.match.url}/reviews`}>Reviews</Link></li>
                </ul>
            </section>

            <Route path={`${this.props.match.url}/cast`} render={props => <Cast {...props} movieId={this.props.match.params.movieId}/>}></Route>
            <Route path={`${this.props.match.url}/reviews`} render={props => <Reviews {...props} movieId={this.props.match.params.movieId}/>}></Route>
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;

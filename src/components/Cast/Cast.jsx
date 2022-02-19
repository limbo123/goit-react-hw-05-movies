import axios from 'axios';
import React from 'react';

import styles from './Cast.module.css';

class Cast extends React.Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.movieId}/credits?api_key=170b9b9397b0574b7d603cba918ea1f4&language=en-US`
      )
      .then(res => {
        res.data.cast.length = 20;
        this.setState({
          cast: res.data.cast,
        });
      });
  }

  render() {
    return (
      <>
        {this.state.cast[0] && (
          <ul>
            {this.state.cast.map(actor => (
              <li key={actor.name}>
                <img
                  className={styles.actorImage}
                  src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                  alt={actor.name}
                />
                <h3>{actor.name}</h3>
                <h3>Character: {actor.character}</h3>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Cast;

import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


class HomePage extends React.Component {
  state = {
    popularFilms: [],
  }

  componentDidMount() {
      axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=170b9b9397b0574b7d603cba918ea1f4`)
      .then(res => {
          this.setState({
              popularFilms: res.data.results,
          });
      })
  }

  render() {
    return (
        <ul>
            {this.state.popularFilms.map(film => (
                <li key={film.id}><Link to={`/movies/${film.id}`}>{film.title}</Link></li>
            ))}
        </ul>
    )
  }
}

export default HomePage;
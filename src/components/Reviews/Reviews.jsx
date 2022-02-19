import axios from 'axios';
import React from 'react';

class Reviews extends React.Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.movieId}/reviews?api_key=170b9b9397b0574b7d603cba918ea1f4&language=en-US`
      )
      .then(res => {
        
        this.setState({
          reviews: res.data.results,
        });
      });
  }

  render() {
    return (
      <>
        {this.state.reviews.length > 0 ? (
          <ul>
            {this.state.reviews.map(review => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h3>There is no reviews</h3>
        )}
      </>
    );
  }
}

export default Reviews;

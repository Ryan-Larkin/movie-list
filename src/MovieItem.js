import React from 'react';

import './MovieItem.css';

const MOVIE_API_KEY = 'd44d485616fe9ed89eb714a25e6b56d7';

const MOVIE_URL  = 'https://api.themoviedb.org/3/search/movie';
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

const MOVIE_POSTER = 'https://image.tmdb.org/t/p/w154/';

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      poster : null
    }
  }

  findMovie = () => {
    let url = `${CORS_PROXY}${MOVIE_URL}?query=${this.props.name}&api_key=${MOVIE_API_KEY}&language=en-US&page=1`;

    fetch(url)
    .then(response => response.json())
    .then(movieData => {
      if(movieData.results && movieData.results.length > 0) {
        console.log(movieData);
        this.setState({
          title: movieData.results[0].title, // this is just here so that the movie name is always formatted properly (first letter capitalized, etc) instead of manipulating the search string
          poster: `${MOVIE_POSTER}${movieData.results[0].poster_path}`
        });
      }
    });
  }

  componentDidMount = () => {
    this.findMovie();
  }

  render() {
    return (
      <div className="movie-item">
        <img src={this.state.poster} alt="No poster found" />
        <p>{this.state.title}</p>
      </div>
    );
  }
}

export default MovieItem;

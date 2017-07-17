import React from 'react';
import api from './api/api';
import MovieDescription from './modals/MovieDescription';

import './MovieItem.css';

const MOVIE_API_KEY = 'd44d485616fe9ed89eb714a25e6b56d7';
const MOVIE_URL  = 'https://api.themoviedb.org/3/search/movie';
const MOVIE_POSTER = 'https://image.tmdb.org/t/p/w154/';

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      poster : null,
      showMovieModal: false
    }
  }

  findMovie = () => {
    let url = `${MOVIE_URL}?query=${this.props.title}&api_key=${MOVIE_API_KEY}&language=en-US&page=1`;

    fetch(url)
    .then(response => response.json())
    .then(movieData => {
      console.log(movieData);
      if(movieData.results && movieData.results.length > 0) {
        this.setState({
          title    : movieData.results[0].title, // this is just here so that the movie name is always formatted properly (first letter capitalized, etc) instead of manipulating the search string
          poster   : `${MOVIE_POSTER}${movieData.results[0].poster_path}`,
          overview : movieData.results[0].overview
        });
      }
    });
  }

  componentDidMount = () => {
    this.findMovie();
  }

  deleteThisMovie = () => {
    // api.deleteMovie(this.props.id)
    // .then(this.props.updateMovies);
    this.setState({showMovieModal : true});
  }

  closeModal = () => this.setState({ showMovieModal : false })

  render() {
    return (
      <div className="movie-item" onClick={this.deleteThisMovie}>
        <img src={this.state.poster} alt="No poster found" />

        {
          this.state.showMovieModal
          ? <div>
              <MovieDescription
                title={this.state.title}
                poster={this.state.poster}
                overview={this.state.overview}
                closeModal={this.closeModal}
              />
            </div>
          : null
        }
      </div>
    );
  }
}

export default MovieItem;

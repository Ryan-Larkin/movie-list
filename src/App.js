import React, { Component } from 'react';
import './App.css';

import MovieItem from './MovieItem';

const ENTER = 13;

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    }
  }

  _handleTyping = (e) => {
    if (e.keyCode === ENTER) {
      this._addMovie();
      this.refs.newMovie.value = "";
    }
  }

  _addMovie = () => {
    let { newMovie: {value: newMovie} } = this.refs;

    this.setState({
      movies: [...this.state.movies, newMovie]
    });
  }

  _removeMovie = (index) => {
    this.state.movies.splice(index, 1);

    this.setState({
      movies: this.state.movies
    });
  }

  render() {
    let { movies } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Movies</h2>
        </div>
        <div className="App-intro">

          <br />

          <div className="movie-input">
            <input type="text" ref="newMovie" onKeyUp={this._handleTyping}/>
            <button onClick={this._addMovie}>Add Movie</button>
          </div>

          <hr />

          <div className="movie-list">
            {
              movies.map((m) => (
                <MovieItem
                  name={m}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;

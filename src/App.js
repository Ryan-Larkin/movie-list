import React, { Component } from 'react';
import './App.css';
import MovieItem from './MovieItem';

import api from './api/api';

const ENTER = 13;

//TODO: turn the movies array from an array of names into an array of objects, potentially, need to use an id somehow for the remove

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    }
  }

  handleTyping = (e) => {
    if (e.keyCode === ENTER) {
      this.addMovie();
      this.refs.newMovie.value = "";
    }
  }

  addMovie = () => {
    let { newMovie: {value: newMovie} } = this.refs;

    // this.setState({
    //   movies: [...this.state.movies, newMovie]
    // });


    // TODO: rename addM here and in api/api to addMovie or something
    api.addM(newMovie)
    .then(res => {
      console.log(res);
      this.setState({
        movies: [...this.state.movies, newMovie]
      });
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
            <input type="text" ref="newMovie" onKeyUp={this.handleTyping}/>
            <button onClick={this.addMovie}>Add Movie</button>
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

import superagent from 'superagent';

class Api {
  getMovies = () => (
    superagent
    .get(`http://localhost:3000/movies/`)
    .catch(err => console.error(err))
  )
  
  addMovie = (title) => (
    superagent
    .post(`http://localhost:3000/movies`)
    .send({title: title})
    .catch(err => console.error(err))
  )

  deleteMovie = (movieId) => (
    superagent
    .delete(`http://localhost:3000/movies/${movieId}`)
    .catch(err => console.error(err))
  )
}

export default new Api();

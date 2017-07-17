const express  = require('express');
const Movie = require('../src/models/movie');

module.exports = () => {
  const moviesController = express.Router();

  moviesController.get('/', (req, res) => {
    // mongoose find
  });

  moviesController.post('/', (req, res) => {
    console.log('req', req.body);

    let newM = new Movie({
      title : req.body.title
    });

    newM.save(function(err) {
      if (err) throw err;
      console.log('Movie saved successfully.');
    });
  });

  return moviesController;
};

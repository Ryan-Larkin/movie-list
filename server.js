const app        = require('express')();
const mongoose   = require('mongoose');
const cors       = require('cors');
const bodyParser = require('body-parser');

const configDB = require('./src/config/database.js');
const moviesController = require('./controllers/movies.js');

mongoose.connect(configDB.url);

app.use(cors());
app.use(bodyParser.json());
app.use('/movies', moviesController());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Web server listening on ${port}`);
});

import superagent from 'superagent';

class Api {
  addM = (title) => (
    superagent
    .post(`http://localhost:3000/movies`)
    .send({title: title})
  )
}

export default new Api();

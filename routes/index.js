const routes = require('express').Router();

// routes.get('/', (req, res, next) => {
//     res.json('Hello World');
// });
const myController = require('../controllers')

routes.get('/',myController.firstFunction);
routes.get('/awesome',myController.secondFunction);

module.exports = routes;
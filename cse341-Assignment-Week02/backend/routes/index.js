
const router = require('express').Router();
const {getData} = require('../controllers/professional.js');
// const router = express.Router();

// GET /feed/posts
router.get('/', getData);

// localhost:8080/professional/
module.exports = router;
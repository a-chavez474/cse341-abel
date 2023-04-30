const firstFunction = (req, res, next) => {
    res.json('Melany Chavez');
};

const secondFunction = (req, res, next) => {
    res.json('Adela Chavez');
};

module.exports = { firstFunction, secondFunction};
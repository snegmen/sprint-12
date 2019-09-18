const cardsRouter = require('express').Router();
const cards = require('../data/card.json');

cardsRouter.get('/', (req, res) => {
  res.send(cards);
});

module.exports = cardsRouter;

const usersRouter = require('express').Router();
const users = require('../data/user.json');

usersRouter.get('/', (req, res) => {
  res.send(users);
});


usersRouter.get('/:id', (req, res) => {
  const indexUser = users.findIndex((item) => item._id === req.params.id);
  if (indexUser < 0) {
    res.status(404).send({ error: 'Такого пользователя нет' });
  } else {
    res.send(users[indexUser]);
  }
});

module.exports = usersRouter;
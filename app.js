const express = require('express');
const path = require('path');
const { cardsRouter, usersRouter } = require('./routes');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.use('/cards', cardsRouter);
app.use('/users', usersRouter);
app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT);

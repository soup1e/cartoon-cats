const { Router } = require('express');

const { cats } = require('../cats-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    const match = cats.find((cat) => cat.id === req.params.id);
    res.json(match);
  })
  .get('/', (req, res) => {
    const filteredData = [];
    cats.map((cat) => {
      filteredData.push({ id: cat.id, name: cat.name });
    });
    res.json(filteredData);
  });

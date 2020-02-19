const router = require('express').Router();
let History = require('../models/history.model');

router.route('/').get((req, res) => {
  History.find()
    .then(histories => res.json(histories))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const module = req.body.module;
  console.log("module " + module);
  const description = req.body.description;

  const newHistory = new History({
    module,
    description
  });

  newHistory.save()
    .then(() => res.json('history added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
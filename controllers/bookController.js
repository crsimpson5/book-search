const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Book
      .find({})
      .sort({ dateAdded: -1 })
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findByIdAndDelete({ _id: req.params.id })
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(422).json(err));
  }
};

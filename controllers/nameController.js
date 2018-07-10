const db = require('../models');

// Defining methods for the nameController

module.exports = {
    findAll: function(req, res){
        db.Name
        .find(req.query)
        .sort({ date: -1 })
        .then(dbName => res.json(dbName))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Name
          .findById(req.params.id)
          .then(dbName => res.json(dbName))
          .catch(err => res.status(422).json(err));
      },
    create: function(req, res){
        const name = {
            name: req.body.name,
            gender: req.body.gender,
            //origin: req.body.usages.usage_full
          };
        db.Name
        .create(name)
        .then(dbName => res.json(dbName))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Name
          .findById({ _id: req.params.id })
          .then(dbName => dbName.remove())
          .then(dbName => res.json(dbName))
          .catch(err => res.status(422).json(err));
    },


}
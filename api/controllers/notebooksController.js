// Notebooks Controller
let mongoose = require('mongoose');
let Notebook = require('./../models/notebook');

let get = (req, res) => {
    Notebook.find(req.query).exec((err, data) => {
        if (!err) {
            res.status(200);
            res.json(data);
        } else {
            res.json(err);
        }
    });
};

let add = (req, res) => {
    const newNotebook = new Notebook(req.body);
    newNotebook.save((err, data) => {
        res.send(data);
    });
}

let fuckThis = (req, res) => {
    Notebook.remove(req.body, (err, data)=> {
        if (!err) {
            res.status(204);
            res.json(data);
        } else {
            res.json(err);
        }
    });
}

let update = (req, res) => {
    let conditions = {_id: req.body._id};
    Notebook.update(conditions, req.body, (err, data) => {
        if (!err) {
            res.status(202);
            res.json(data);
        } else {
            res.json(err);
        }
    });
}

let notebooksController = {
    get, add, fuckThis, update
}

module.exports = notebooksController;
// Notes Controller
let mongoose = require('mongoose');
let Note = require('./../models/note');

let get = (req, res) => {
    Note.find(req.query).exec((err, data) => {
        if (!err) {
            res.status(200);
            res.json(data);
        } else {
            res.json(err);
        }
    });
};

let add = (req, res) => {
    const newNote = new Note(req.body);
    newNote.save((err, data) => {
        res.send(data);
    });
}

let fuckThis = (req, res) => {
    let condition = req.body;
    if (!!Object.getOwnPropertyNames(req.query).length) {
        condition = req.query;
    }

    if (!!Object.getOwnPropertyNames(condition).length) {
        Note.remove(condition, (err, data)=> {
            if (!err) {
                res.status(204);
                res.send('data');
            } else {
                res.status(404);
                res.json(err);
            }
        });
    } else {
        res.status(404);
        res.json('Error, empty condition');
    }
}

let update = (req, res) => {
    let conditions = {_id: req.body._id};
    Note.update(conditions, req.body, (err, data) => {
        if (!err) {
            res.status(202);
            res.json(data);
        } else {
            res.json(err);
        }
    });
}

let notesController = {
    get, add, fuckThis, update
}

module.exports = notesController;
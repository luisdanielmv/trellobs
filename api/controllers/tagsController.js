// Tags Controller
let mongoose = require('mongoose');
let Tag = require('./../models/tag');

let get = (req, res) => {
    Tag.find(req.query).exec((err, data) => {
        if (!err) {
            res.status(200);
            res.json(data);
        } else {
            res.json(err);
        }
    });
};

let add = (req, res) => {
    const newTag = new Tag(req.body);
    newTag.save((err, data) => {
        res.send(data);
    });
}

let fuckThis = (req, res) => {
    Tag.remove(req.body, (err, data)=> {
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
    Tag.update(conditions, req.body, (err, data) => {
        if (!err) {
            res.status(202);
            res.json(data);
        } else {
            res.json(err);
        }
    });
}

let tagsController = {
    get, add, fuckThis, update
}

module.exports = tagsController;
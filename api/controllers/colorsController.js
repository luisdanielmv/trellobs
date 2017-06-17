// Color Controller
let mongoose = require('mongoose');
let Color = require('./../models/color');

let get = (req, res) => {
    Color.find(req.query).exec((err, data) => {
        if (!err) {
            res.status(200);
            res.json(data);
        } else {
            res.json(err);
        }
    });
};

let add = (req, res) => {
    const newColor = new Color(req.body);
    newColor.save((err, data) => {
        res.send(data);
    });
}

let fuckThis = (req, res) => {
    Color.remove(req.body, (err, data)=> {
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
    Color.update(conditions, req.body, (err, data) => {
        if (!err) {
            res.status(202);
            res.json(data);
        } else {
            res.json(err);
        }
    });
}

let colorsController = {
    get, add, fuckThis, update
}

module.exports = colorsController;
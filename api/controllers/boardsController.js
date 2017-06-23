// Boards Controller
require('dotenv').config();
const jwt = require('jsonwebtoken');

let mongoose = require('mongoose');
let Boards = require('./../models/board');

const respond = (res, status, json) => {
    res.status(status);
    res.json(json);
}

let get = (req, res) => {
    let userInfo = jwt.verify(req.query.token, process.env.SECRET);

    Boards.find().where('ownerId').equals(userInfo._id).exec((err, data) => {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 200, data);
        }
    });
};

let getOne = (req, res) => {
    Boards.findOne({_id: req.params.id}).exec((err, data) => {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 200, data);
        }
    });
};

let add = (req, res) => {
    let userInfo = jwt.verify(req.body.token, process.env.SECRET);

    const newBoard = new Boards(req.body.newBoard);
    
    newBoard.save((err, data) => {
        if (err) {
            respond(res, 400, err);
        } else {
            respond(res, 201, data);
        }
    });
}

let del = (req, res) => {
    Boards.remove(req.body, (err, data)=> {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 202, data);
        }
    });
}

let update = (req, res) => {
    let conditions = {_id: req.body._id};
    Boards.update(conditions, req.body, (err, data) => {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 202, data);
        }
    });
}

let boardsController = {
    get, getOne, add, del, update
}

module.exports = boardsController;
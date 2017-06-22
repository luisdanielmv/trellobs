// Lists Controller
require('dotenv').config();
const jwt = require('jsonwebtoken');

let mongoose = require('mongoose');
let Lists = require('./../models/list');

const respond = (res, status, json) => {
    res.status(status);
    res.json(json);
}

let get = (req, res) => {
    let userInfo = jwt.verify(req.query.token, process.env.SECRET);
    let boardID = req.query.boardID;

    Lists.find().where('boardId').equals(boardID).exec((err, data) => {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 200, data);
        }
    });
};

let getOne = (req, res) => {
    Lists.findOne({_id: req.params.id}).exec((err, data) => {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 200, data);
        }
    });
};

let add = (req, res) => {
    const newList = new Lists(req.body);
    newList.save((err, data) => {
        if (err) {
            respond(res, 400, err);
        } else {
            respond(res, 201, data);
        }
    });
}

let del = (req, res) => {
    Lists.remove(req.body, (err, data)=> {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 202, data);
        }
    });
}

let update = (req, res) => {
    let conditions = {_id: req.body._id};
    Lists.update(conditions, req.body, (err, data) => {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 202, data);
        }
    });
}

let listsController = {
    get, getOne, add, del, update
}

module.exports = listsController;
// Lists Controller
let mongoose = require('mongoose');
let Lists = require('./../models/list');

const respond = (res, status, json) => {
    res.status(status);
    res.json(json);
}

let get = (req, res) => {
    Lists.find(req.query).exec((err, data) => {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 200, data);
            console.log(req.query);
        }
    });
};

let getOne = (req, res) => {
    Lists.findOne({_id: req.params.id}).exec((err, data) => {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 200, data);
            console.log(req.query);
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
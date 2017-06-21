// Users Controller
let mongoose = require('mongoose');
let Users = require('./../models/user');

require('dotenv').config();
const jwt = require('jsonwebtoken');

const respond = (res, status, json) => {
    res.status(status);
    res.json(json);
}

let get = (req, res) => {
    Users.find(req.query).exec((err, data) => {
        if (err) {
            respond(res, 404, err);
        } else {
            let fuck = 'fuck';
            let token = jwt.sign({fuck}, 'fuck');
            console.log('tokenmon:' + token);
            console.log(jwt.verify(token, 'fuck'));
            respond(res, 200, data);
            console.log(req.query);
        }
    });
};

let getOne = (req, res) => {
    Users.findOne({_id: req.params.id}).exec((err, data) => {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 200, data);
            console.log(req.query);
        }
    });
};

let add = (req, res) => {
    const newUser = new Users(req.body);
    newUser.save((err, data) => {
        if (err) {
            respond(res, 400, err);
        } else {
            respond(res, 201, data);
        }
    });
}

let del = (req, res) => {
    Users.remove(req.body, (err, data)=> {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 202, data);
        }
    });
}

let update = (req, res) => {
    let conditions = {_id: req.body._id};
    Users.update(conditions, req.body, (err, data) => {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 202, data);
        }
    });
}

let usersController = {
    get, getOne, add, del, update
}

module.exports = usersController;
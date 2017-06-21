// Users Controller
require('dotenv').config();
const jwt = require('jsonwebtoken');

const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');

let mongoose = require('mongoose');
let Users = require('./../models/user');


const validateInput = (data) => {
    let errors = {};

    if (Validator.isEmpty(data.username)) {
        errors.username = 'This field is required';
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'This field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const respond = (res, status, json) => {
    res.status(status);
    res.json(json);
}

let get = (req, res) => {
    Users.find(req.query).exec((err, data) => {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 200, data);
            console.log(req.query);
        }
    });
};

let getOne = (req, res) => {
    console.log('query: ', req.body);

    const { errors, isValid } = validateInput(req.body);

    if (!isValid) {
        res.status(422).json(errors);
        console.log(errors);
    } else {
        Users.findOne(req.body).exec((err, data) => {
            if (err) {
                respond(res, 404, req);
            } else {
                let token = jwt.sign({ _id: data._id }, process.env.SECRET);

                respond(res, 200, {
                    user: {
                        _id: data._id,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        username: data.username
                    },
                    token
                });
            }
        });
    }
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
    console.log(req.body);
    Users.remove(req.body, (err, data) => {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 202, data);
        }
    });
}

let update = (req, res) => {
    let conditions = { _id: req.body._id };
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
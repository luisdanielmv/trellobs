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

const validateRegister = (data) => {
    let errors = {};

    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = 'This field is required';
    }
    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = 'This field is required';
    }
    if (Validator.isEmpty(data.username)) {
        errors.username = 'This field is required';
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'This field is required';
    } else if (Validator.isEmail(data.email)) {
        errors.email = 'Invalid Email';
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
        }
    });
};

let getOne = (req, res) => {
    const { errors, isValid } = validateInput(req.body);

    if (!isValid) {
        res.status(422).json(errors);
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
                        username: data.username,
                        email: data.email
                    },
                    token
                });
            }
        });
    }
};

let add = (req, res) => {
    const newUser = new Users(req.body.userData);
    const { errors, isValid } = validateInput(newUser);
    console.log('userdata', req.body);
    
    if (!isValid) {
        res.status(422).json(errors);
    } else {
        newUser.save((err, data) => {
            if (err) {
                (err.errmsg.indexOf('$username') !== -1) ? errors.username = 'Username is in use': '';
                (err.errmsg.indexOf('$email') !== -1) ? errors.email = 'Email is in use': '';
                respond(res, 400, errors);
            } else {
                let token = jwt.sign({ _id: data._id }, process.env.SECRET);

                respond(res, 201, {
                    user: {
                        _id: data._id,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        username: data.username,
                        email: data.email
                    },
                    token
                });
            }
        }).catch((errors)=>{console.log('catch', errors);});
    }
}

let del = (req, res) => {
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
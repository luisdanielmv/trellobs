// Cards Controller
require('dotenv').config();
const jwt = require('jsonwebtoken');

let mongoose = require('mongoose');
let Cards = require('./../models/card');

const respond = (res, status, json) => {
    res.status(status);
    res.json(json);
}

let get = (req, res) => {
    let userInfo = jwt.verify(req.headers.authorization, process.env.SECRET);
    let idList = req.query.idList;

    Cards.find().exec((err, data) => {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 200, data);
        }
    });
};

let getOne = (req, res) => {
    Cards.findOne({_id: req.params.id}).exec((err, data) => {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 200, data);
        }
    });
};

let add = (req, res) => {
    let userInfo = jwt.verify(req.headers.authorization, process.env.SECRET);

    let newCard = new Cards(req.body.newCard);

    newCard.members = [userInfo._id];

    newCard.save((err, data) => {
        if (err) {
            respond(res, 400, err);
        } else {
            respond(res, 201, data);
        }
    });
}

let del = (req, res) => {
    Cards.remove(req.body, (err, data)=> {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 202, data);
        }
    });
}

let update = (req, res) => {
    let userInfo = jwt.verify(req.headers.authorization, process.env.SECRET);
    let updatedCard = req.body.updatedCard;
    let condition = {_id: updatedCard._id};

    delete updatedCard._id;

    Cards.update(condition, updatedCard, (err, data) => {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 202, data);
        }
    });
}

let cardsController = {
    get, getOne, add, del, update
}

module.exports = cardsController;
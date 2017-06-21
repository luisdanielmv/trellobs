// Cards Controller
let mongoose = require('mongoose');
let Cards = require('./../models/card');

const respond = (res, status, json) => {
    res.status(status);
    res.json(json);
}

let get = (req, res) => {
    Cards.find(req.query).exec((err, data) => {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 200, data);
            console.log(req.query);
        }
    });
};

let getOne = (req, res) => {
    Cards.findOne({_id: req.params.id}).exec((err, data) => {
        if (err) {
            respond(res, 404, err);
        } else {
            respond(res, 200, data);
            console.log(req.query);
        }
    });
};

let add = (req, res) => {
    const newCard = new Cards(req.body);
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
    let conditions = {_id: req.body._id};
    Cards.update(conditions, req.body, (err, data) => {
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
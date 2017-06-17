// Userss Controller
let mongoose = require('mongoose');
let Users = require('./../models/user');

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

// let getOne = (req, res) => {
//     Users.find(req.query).exec((err, data) => {
//         if (err) {
//             respond(res, 404, err);
//         } else {
//             respond(res, 200, data);
//         }
//     });
// };

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
    get, add, del, update
}

module.exports = usersController;
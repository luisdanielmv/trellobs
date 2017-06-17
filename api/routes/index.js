require('dotenv').config();

const express = require('express');
const router = express.Router();

const usersController = require('./../controllers/usersController');

router.get('/', function (req, res) {
    res.send('Welcome to the BN api');
});

router.post('/users', usersController.add);
router.get('/users', usersController.get);
// router.get('/users/:id', usersController.getOne);
router.delete('/users', usersController.del);
router.put('/users', usersController.update);

module.exports = router;

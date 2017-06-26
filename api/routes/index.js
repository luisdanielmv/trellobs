require('dotenv').config();

const express = require('express');
const router = express.Router();

const usersController = require('./../controllers/usersController');
const boardsController = require('./../controllers/boardsController');
const listsController = require('./../controllers/listsController');
const cardsController = require('./../controllers/cardsController');

router.get('/', function (req, res) {
    res.send('Welcome to the BN api');
});

router.post('/register', usersController.add);
router.get('/users', usersController.get);
router.post('/auth', usersController.getOne);
router.delete('/users', usersController.del);
router.put('/users', usersController.update);

router.post('/boards', boardsController.add);
router.get('/boards', boardsController.get);
router.get('/boards/:id', boardsController.getOne);
router.delete('/boards', boardsController.del);
router.put('/boards', boardsController.update);

router.post('/lists', listsController.add);
router.get('/lists', listsController.get);
router.get('/lists/:id', listsController.getOne);
router.delete('/lists', listsController.del);
router.put('/lists', listsController.update);

router.post('/cards', cardsController.add);
router.get('/cards', cardsController.get);
router.get('/cards/:id', cardsController.getOne);
router.delete('/cards', cardsController.del);
router.put('/cards', cardsController.update);

module.exports = router;

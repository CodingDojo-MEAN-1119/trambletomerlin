const router = require('express').Router();

const toyController = require('../contollers/toy.controller');
module.exports = router
    .get('/',toyController.index)
    .post('/',toyController.create)
    .get('/:toyId',toyController.show)
    .put('/:toyId',toyController.update)
    .delete('/:toyId',toyController.destroy);
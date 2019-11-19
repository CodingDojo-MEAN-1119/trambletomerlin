const router = require('express').Router();

const productController = require('../contollers/product.controller');
module.exports = router
    .get('/',productController.index)
    .post('/',productController.create)
    .get('/:productId',productController.show)
    .put('/:productId',productController.update)
    .delete('/:productId',productController.destroy);
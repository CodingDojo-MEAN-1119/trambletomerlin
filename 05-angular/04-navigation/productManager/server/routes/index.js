const productRoutes = require('./product.routes');
const router = require('express').Router();
const apiRouter = require('express').Router();
const catchallrouter = require('./catchall.routes');

router.use('/products',productRoutes)
module.exports = apiRouter.use('/api', router).use(catchallrouter);



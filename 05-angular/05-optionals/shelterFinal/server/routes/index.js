const petRoutes = require('./pet.routes');
const router = require('express').Router();
const apiRouter = require('express').Router();
const catchallrouter = require('./catchall.routes');

router.use('/pets',petRoutes)
module.exports = apiRouter.use('/api', router).use(catchallrouter);



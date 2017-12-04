var express = require('express');
var router = express.Router();
router.use('/products',require('./routesProducts.js'));
router.use('/stripe',require('./routesStripe.js'));
module.exports=router;
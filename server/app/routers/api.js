var express = require('express');
var router = express.Router();
router.use('/products',require('./routesProducts.js'));
module.exports=router;
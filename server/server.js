let express=require('express');
let app = new express();
let port = 8000;
let bodyParser = require('body-parser');//npm install body-parser? --save | DONE
let mongoose = require('mongoose');
let router = require('./app/routers/api.js');
mongoose.connect('mongodb://localhost/products');//need to write db name
app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept')
	next();
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/app/v1',require('./app/routers/api.js'));
app.use(function(req,res){
	res.status(404).send({message:'Page not found'});
});
//app.use
app.listen(port);
console.log('Server Restful API run in 8000 port');
//postman extention in chrome
let mongoose = require('mongoose');
Product = mongoose.model('products'),bcrypt=required('bcryptjs');//npm install bcryptjs --save | DONE!

exports.getProducts = function(req,res){
	Product.find({},'title',function(err,products){
		if(err)
			return res.send(err);
		res.json(products);
	});
};
exports.getOne = function(req,res){
	Product.findOne(req.param.id,function(err,product){
		if(!product){
			res.status(404).send({message:'Product not found'});
		} else{
			if(err)
				return res.send(err);
			res.json(product);
		}
	});
};
exports.updateProduct=function(req,res){
	Product.findOneAndUpdate({_id:req.param.id},req.body,function(err,product){
		if(err)
			return res.status(400).send(err);
		res.json(product);
	});
};
exports.deleteProduct=function(req,res){
	Product.remove({_id:req.param.id},function(err,product){
		if(err)
			return res.send(err);
		res.json({message:'Product has been successfully removed'});
	});
};
function cryptPass(password,callback){
	bcrypt.genSalt(10,function(err,salt){
		callback(err);
		bcryptCash(password,salt,function(err,pass){
			callback(err,pass);
		});
	});
};
exports.createProduct=function(req,res){
	cryptPass(req.body.password,function(err,password){
		if(err) return req.send(err);
		var productData=req.body;
		productData.password=password;
		var newProduct=new Product(productData);
		newProduct.save(function(err,product){
			if(err)
				return res.send(err);
			res.send(product);
		});
	});
};
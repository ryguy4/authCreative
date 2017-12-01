var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = mongoose.model('Product');

router.get('/products', function(req, res, next) {
	Product.find(function(err, products){
		if(err){return next(err);}
		res.json(products);
	});
});

router.post('/products', function(req,res,next) {
	var product = new Product(req.body);
	product.save(function(err,product) {
		if(err) {return next(err);}
		res.json(product)
	});
});

router.get('/products/:product', function(req, res) {
	res.json(req.product);
});

router.param('product', function(req, res, next, id) {
	var query = Product.findById(id);
	query.exec(function(err, product) {
		if(err) {return next(err); }
		if(!product) { return next(new Error("Can't find product"));}
		req.product = product;
		return next();
	});
});

router.put('/products/:product/upsold', function(req, res, next) {
  req.product.upsold(function(err, product){
    if (err) { return next(err); }
    res.json(product);
  });
});

router.delete('/products/:product', function(req, res) {
  console.log("in Delete");
  req.product.remove();
  res.sendStatus(200);
});

module.exports = router;

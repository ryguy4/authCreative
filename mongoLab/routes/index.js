var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Joke = mongoose.model('Joke');

router.get('/jokes', function(req, res, next) {
	Joke.find(function(err, jokes){
		if(err){return next(err);}
		res.json(jokes);
	});
});

router.post('/jokes', function(req,res,next) {
	var joke = new Joke(req.body);
	joke.save(function(err,joke) {
		if(err) {return next(err);}
		res.json(joke)
	});
});

router.get('/jokes/:joke', function(req, res) {
	res.json(req.joke);
});

router.param('joke', function(req, res, next, id) {
	var query = Joke.findById(id);
	query.exec(function(err, joke) {
		if(err) {return next(err); }
		if(!joke) { return next(new Error("Can't find joke"));}
		req.joke = joke;
		return next();
	});
});

router.put('/jokes/:joke/upvote', function(req, res, next) {
  req.joke.upvote(function(err, joke){
    if (err) { return next(err); }
    res.json(joke);
  });
});

router.delete('/jokes/:joke', function(req, res) {
  console.log("in Delete");
  req.joke.remove();
  res.sendStatus(200);
});

module.exports = router;

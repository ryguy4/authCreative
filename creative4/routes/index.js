var express = require('express');
var router = express.Router();
var request = require('request');

var jokes = [
  {
    question: 'What is brown and sticky?',
    answer: 'A Stick',
	upvotes: 0
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', {root: 'public' });
});

router.get('/getJoke', function(req, res) {
  console.log("in getJoke");
  res.send(jokes);
});
router.post('/getJoke', function(req, res) {
  console.log("in jokes post");
  console.log(req.body);
  jokes.push(req.body);
  res.end('{"success" : "Updated Successfully", "status" : 200}');
});

module.exports = router;

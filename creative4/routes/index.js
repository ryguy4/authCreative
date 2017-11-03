var express = require('express');
var router = express.Router();
var request = require('request');

var jokes = [
  {
    question: 'What is brown and sticky?',
    answer: 'A Stick',
	upvotes: 0
  },
  {
	question: "Why did the turkey refuse dessert?",
	answer: "He was stuffed.",
	upvotes: 0
  },
  {
	question: "Did you hear about the 2 silk worms in a race?",
	answer: "It ended in a tie!",
	upvotes: 0
  },
  {
	question: "What do you call a laughing motorcycle?",
	answer: "A Yamahahaha.",
	upvotes: 0
  },
{
	question: "A friend of mine tried to annoy me with bird puns, but I soon realized that toucan play at that game.",
	answer: "",
	upvotes: 0
},
{
	question: "Yesterday I accidentally swallowed some food coloring. The doctor says I'm OK, but I feel like I've dyed a little inside.",
	answer: "",
	upvotes: 0
},
{
	question: "I wondered why the baseball was getting bigger. Then it hit me.",
	answer: "",
	upvotes: 0
},
{
	question: "I'd tell you a chemistry joke but I know I wouldn't get a reaction.",
	answer: "",
	upvotes: 0
},
{
	question: "Have you ever tried to eat a clock? It's very time consuming.",
	answer: "",
	upvotes: 0
},
{
	question: "Did you hear about the guy who got hit in the head with a can of soda? He was lucky it was a soft drink.",
	answer: "",
	upvotes: 0
},
{
	question: "Something about subtraction just doesn't add up.",
	answer: "",
	upvotes: 0
},
{
	question: "I wasn't originally going to get a brain transplant, but then I changed my mind.",
	answer: "",
	upvotes: 0
},
{
	question: "When Chuck Norris was born he drove his mom home from the hospital.",
	answer: "",
	upvotes: 0
},
{
	question: "Chuck Norris has a diary. It's called the Guinness Book of World Records.",
	answer: "",
	upvotes: 0
},
{
	question: "Chuck Norris threw a grenade and killed 50 people, then it exploded.",
	answer: "",
	upvotes: 0
},
{
	question: "Chuck Norris doesn't worry about high gas prices. His vehicles run on fear.",
	answer: "",
	upvotes: 0
},
{
	question: "Chuck Norris counted to infinity. Twice.",
	answer: "",
	upvotes: 0
},
{
	question: "Chuck Norris can kill two stones with one bird.",
	answer: "",
	upvotes: 0
},
{
	question: "When a zombie apocalypse starts, Chuck Norris doesn't try to survive. The zombies do.",
	answer: "",
	upvotes: 0
},
{
	question: "There once was a street called Chuck Norris, but the name was changed for public safety because nobody crosses Chuck Norris and lives.",
	answer: "",
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

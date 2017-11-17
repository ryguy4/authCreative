var mongoose = require('mongoose');
var JokeSchema = new mongoose.Schema({
	joke: {type:String,default:""},
	punchLine: {type:String,default:""},
	upvotes: {type:Number,default:0},
});
JokeSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};
mongoose.model('Joke',JokeSchema);
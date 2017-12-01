var mongoose = require('mongoose');
require('mongoose-type-url');
var ProductSchema = new mongoose.Schema({
	title:String,
	price:Number,
	url:mongoose.SchemaTypes.Url,
	sold: {type:Number,default:0},
});
ProductSchema.methods.upsold = function(cb) {
  this.sold += 1;
  this.save(cb);
};
mongoose.model('Product',ProductSchema);
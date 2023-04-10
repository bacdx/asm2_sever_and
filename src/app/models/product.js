const mongodb =require('mongoose');
const Schema=mongodb.Schema;

const product=new Schema({
    name: String,
    price:String,
    img:String,
    
});
module.exports=mongodb.model('product',product)
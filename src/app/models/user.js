const mongodb =require('mongoose');
const Schema=mongodb.Schema;

const User=new Schema({
    email: String,
    password:String,
    name:String,
    img:String,
    
});
module.exports=mongodb.model('user',User)
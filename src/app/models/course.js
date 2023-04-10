const mongodb =require('mongoose');
const Schema=mongodb.Schema;

const Bac=new Schema({
    ten: String,
    tuoi:String,
    
});
module.exports=mongodb.model('sinhvien',Bac)
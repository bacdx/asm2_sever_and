const mongoose = require('mongoose');
const config1="mongodb+srv://bactxph20234:acsimet2k3@cluster0.1qyavkz.mongodb.net/?retryWrites=true&w=majority"
const config2='mongodb+srv://bactxph20234:acsimet2k3@cluster0.1qyavkz.mongodb.net/lab?retryWrites=true&w=majority'
const config3='mongodb://localhost:27017/'
 async function connect(){
try{
    await mongoose.connect(config2)
    console.log('mongodb://localhost:27017')
}catch(e){
    console.log(e)
}
}
module.exports ={ connect};
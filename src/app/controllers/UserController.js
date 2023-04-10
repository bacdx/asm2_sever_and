const Product = require('../models/product');
const Course = require('../models/course');
const User=require('../models/user');

class userController{

    ok(req,res){
        const user = new User(req.body);
        console.log(req.body);
        user.save().then(()=>{
            res.redirect('/user/show')
        })
    }

      create(req,res){

        
           res.render('createaccount')
            

            
        }
       
        show(req,res){
            User.find({}).then(user => {
                
                user=user.map(user=>user.toObject())
                res.render('usermanager',{
                    user: user
                })
            })
        }
        
        async edit(req, res){
            await User.findById(req.params._id)
            .then(user=>{
            
                res.render('update',{
                    user: user.toObject(),
                })
            })
            // product=product.toObject;    
            
        
        }

        update(req,res){
            console.log(req.params._id)
            User.updateOne({_id:req.params._id},req.body).then(()=>{
                res.redirect('/user/show')

            })

        
            
        
            
        }
        async delete(req,res){
            console.log(req.params._id)
           await User.deleteOne({_id:req.params._id})
            res.redirect('/user/show')
        }
    }


module.exports=new userController
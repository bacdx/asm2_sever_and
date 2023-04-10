const Product = require('../models/product');

const Course = require('../models/course');


class productController{


     async list(req,res){
            await Product.find({}).then(product=>{
                product=product.map(product=>product.toObject())
                res.render('home',{product})
            })

            
        }
       create(req,res){
        res.render('create')
       }
       ok(req,res){
        const product = new Product(req.body);
        console.log(req.body);
        product.save().then(()=>{
            res.redirect('/')
        })
    }

        async edit(req, res){
            await Product.findById(req.params._id)
            .then(product=>{
            
                res.render('updatepd',{
                    product: product.toObject(),
                })
            })
            // product=product.toObject;    
            
        
        }

        update(req,res){
            console.log(req.params._id)
            Product.updateOne({_id:req.params._id},req.body).then(()=>{
                res.redirect('/')

            })

        
            
        
            
        }
        async delete(req,res){
            console.log(req.params._id)
           await Product.deleteOne({_id:req.params._id})
            res.redirect('/')
        }
    }


module.exports=new productController
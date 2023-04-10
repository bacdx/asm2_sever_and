const course = require('../models/course');
const Course = require('../models/course');

class SiteController{


     async index(req,res){
      
            console.log('vao day')
            await Course.find({}).then(course=>{
                console.log(course)
                course=course.map(course=>course.toObject())
                res.render('home',{course})
            })

            
        }
       
        
        create(req, res){
            res.render('create')
        }
    }

module.exports=new SiteController
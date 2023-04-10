
const Course = require('../models/course');
const course = require('../models/course');
class CourseController{


     async index(req,res){
      
            await Course.find({slug:req.params.slug}).then(course=>{
                course=course.at(0)
    
                course=course?course.toObject():course
                console.log(course)
                res.render('new',{course})
            })

            
        }
       
        store(req,res){
            const course = new Course(req.body);
            course.save().then(()=>{
                res.redirect('/')
            })

        }
        
       async update(req,res){
            var course=await Course.findById(req.params._id)
                course=course?course.toObject():course
                res.render('update',{
                    course: course
                })

        
                

            
            
        }

        edit(req, res) {
            res.json(req.body)
            // console.log(req.params._id)
            // Course.updateOne({
            //     _id: req.params._id
            // }).then(()=>{
            //     res.redirect('/')
            // })


        }

        
      async  destroy(req,res){
            console.log(req.params)
            const course=Course.findOneAndDelete({_id:req.params}).then(()=>{
        res.redirect('/')
    })
}

}


module.exports=new CourseController
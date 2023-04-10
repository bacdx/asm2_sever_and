const newRouter=require('./new')
const courseRouter=require('./course')
const productRouter=require('./product')
const userRouter=require('./user')

function route(app){
  app.use('/product',productRouter)
app.use('/course', courseRouter)
    app.use('/new', newRouter)
    app.use('/user',userRouter)
    app.use('/',newRouter) 
     

}
module.exports=route
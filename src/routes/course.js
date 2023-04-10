
const express=require('express');
const route =express.Router()
const courseController = require('../app/controllers/CourseController')
const userController = require('../app/controllers/UserController')
const productController = require('../app/controllers/ProductController')

route.get('/:_id/update', courseController.update)
route.get('/:_id', courseController.destroy)
route.post('/store',courseController.store)
route.get('/',productController.list)
route.put('/:_id', courseController.edit)




module.exports=route;
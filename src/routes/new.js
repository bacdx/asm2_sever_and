
const express=require('express');
const route =express.Router()
const newController = require('../app/controllers/SiteController')
const courseController=require('../app/controllers/CourseController')
const productController = require('../app/controllers/ProductController')

route.get('/create',newController.create)
route.get('/:slug',courseController.index)
route.get('/',productController.list)




module.exports=route;
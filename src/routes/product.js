const express=require('express')
const router=express.Router();
const productController =require('../app/controllers/ProductController')

router.get('/:_id/edit',productController.edit);
router.put('/:_id/update',productController.update);
router.get('/:_id/delete',productController.delete);
router.get('/create',productController.create);
router.post('/create',productController.ok);



module.exports=router;
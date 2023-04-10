const express=require('express');
const router=express.Router();

const userController=require('../app/controllers/UserController')

router.get('/create',userController.create)
router.get('/show',userController.show)
router.post('/ok',userController.ok)
router.get('/:_id/delete',userController.delete)
router.get('/:_id/edit',userController.edit)
router.put('/:_id/update',userController.update)


module.exports=router

const express=require('express')
const router=express.Router()
const {addUser , getAllUsers, loginUser,addorder,getAllOrder} =require('../controllers/addUser')
const {loginAdmin} =require('../controllers/admin')
const userform =require('../controllers/userform')
const {newProduct, getAllProducts, updateProduct,deleteProduct} =require('../controllers/addProduct')
const {newCart, getcart}= require('../controllers/addcart')


router.route('/admin').post(loginAdmin)


router.route('/addUser').post(addUser)
router.route('/getAllUsers').get(getAllUsers)

router.route('/userform').post(userform)

router.route('/addproduct').post(newProduct)
router.route('/getAllProducts').get(getAllProducts)

router.route('/addorder').post(addorder)
router.route('/getAllOrder').get(getAllOrder)


router.route('/login').post(loginUser)
router.route('/updateproduct/:id').put(updateProduct)
router.route('/deleteproduct/:id').delete(deleteProduct)
router.route('/addcart').post(newCart)
router.route('/getcart').get(getcart)
router.route('./')




module.exports=router
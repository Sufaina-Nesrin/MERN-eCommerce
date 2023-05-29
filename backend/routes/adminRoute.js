const express = require('express');
const router = express.Router();
const addProduct = require('../controllers/admin/product/addProduct')
const deleteProduct = require('../controllers/admin/product/deleteProduct')
const getProduct = require('../controllers/admin/product/getProduct')
const editProduct = require('../controllers/admin/product/editProduct')
const getAllProducts = require('../controllers/admin/product/getAllProducts')
const deleteOrder = require('../controllers/admin/order/deleteOrder')
const updateOrder = require('../controllers/admin/order/updateOrder')
const getOrderById = require('../controllers/admin/order/getOrder')
const getAllOrders = require('../controllers/admin/order/getAllOrder')
const getAllUsers = require('../controllers/admin/manageUsers/getAllUsers');
const getUserById = require('../controllers/admin/manageUsers/getUser');

router.post('/product', addProduct)
router.delete('/product/:id', deleteProduct)
router.get('/product/:id', getProduct)
router.put('/product/:id', editProduct)
router.get('/allProducts', getAllProducts)

router.delete('/deleteOrder/:id', deleteOrder)
router.put('/updateOrder/:id', updateOrder)
router.get('/getOrder/:id', getOrderById)
router.get('/allOrder',getAllOrders)

router.get('/getAllUsers', getAllUsers)
router.get('/getUserById/:id', getUserById)


module.exports = router
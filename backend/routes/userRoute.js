const express = require('express');
const register = require('../controllers/users/auth/registerUser')
const login = require('../controllers/users/auth/loginUser')
const getUser = require('../controllers/users/auth/getUser')
const updateUser = require('../controllers/users/auth/updateUser')
const deleteUser = require('../controllers/users/auth/deleteUser')
 const verifyToken= require('../middleware/authMiddleware')
 const postReview = require('../controllers/users/product/postReview')
 const getAllProducts = require('../controllers/users/product/getAllProduct');
const getProductbyCat = require('../controllers/users/product/getProductByCat');
const getProduct = require('../controllers/users/product/getProduct');
const addToCart = require('../controllers/users/cart/postCart');
const getCart = require('../controllers/users/cart/getCart');
const deleteFromCart = require('../controllers/users/cart/deleteProduct');
const updateQty = require('../controllers/users/cart/updateQty');
const createOrder = require('../controllers/users/order/createOrder');
const getAllOrders = require('../controllers/users/order/getAllOrder')
const getOrderById = require('../controllers/users/order/getOrderById')
const router = express.Router()

router.post('/signup', register)
router.post('/login', login)
router.get('/getUser/:id', getUser)
router.put('/update/:id',verifyToken, updateUser)
router.delete('/delete/:id',verifyToken, deleteUser)

router.get('/products', getAllProducts)
router.get('/products/:id', getProduct)
router.get('/product/:category', getProductbyCat)
router.put('/review/:id', postReview )

router.put('/addToCart/:id', addToCart)
router.get('/cart',getCart)
router.put('/removeItem/:id', deleteFromCart)
router.put('/updateQty/:id', updateQty)

router.post('/order', createOrder)
router.get('/getAllOrders', getAllOrders)
router.get('/getOrder/:id', getOrderById)


module.exports = router
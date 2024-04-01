const express = require('express');
const Cart = express.Router();
const { userVerifyToken } = require('../../helpers/userToken/userVerifytoken');
const { addToCart, getCart, updateCart, deleteCart } = require('../../controller/user/user.cart.controller');

Cart.post('/addCart',userVerifyToken,addToCart);
Cart.get('/getCart',userVerifyToken,getCart);
Cart.put('/updateCart',userVerifyToken,updateCart);
Cart.delete('/deleteCart',userVerifyToken,deleteCart);

module.exports = Cart;
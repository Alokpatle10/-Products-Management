const express = require('express');
const router = express.Router();
const {createUser,getUserDetails,loginUser,updateProfile}= require("../controller/userController")
const{authentication,authorization}=require("../middleware/auth")
const{createProduct,productByid,updateProduct} = require("../controller/productController")


//--------------------------> (This is test api ) <-------------------------------------//
router.get("/test-me", async function (req, res) {
    res.send("My first ever api!")
})

router.post("/register",createUser)
router.get("/user/:userId/profile",authentication,authorization,getUserDetails)
router.post("/login",loginUser)
router.put('/user/:userId/profile',authentication,authorization,updateProfile)


router.post('/products',createProduct)
router.get('/products')
router.get('/products/:productId',productByid)
router.put('/products/:productId',updateProduct)
router.delete('/products/:productId')

module.exports = router;
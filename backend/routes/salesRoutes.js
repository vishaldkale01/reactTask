const Product = require("../model/userModel")
const express = require("express")
const { addProduct, getProduct, deleteProduct } = require("../controler/prodcutControler")
const {  addUser, getUser, deleteUser, } = require("../controler/salesControler")

const router = express.Router()
// http://localhost:5000/api/sales

router.route("/addProduct").post(addProduct)
router.route("/getProduct").get(getProduct)
router.route("/deleteProduct").delete(deleteProduct)

router.route("/addUser").post(addUser)
router.route("/getUser").get(getUser)
router.route("/deleteUser").delete(deleteUser)

module.exports = router
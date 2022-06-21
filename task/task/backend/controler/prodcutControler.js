const product = require("../model/productModel") 
exports.addProduct = async(req , res) =>{
    try {
        const result  = await product.create(req.body)
    res.status(200).json({
        result,
        success : true,
        message : `product Add `
    })
    } catch (error) {
      res.status(400).json({
        success : false,
        message : `Error ${error}`
      })  
    }
}
exports.getProduct = async(req , res) =>{
    try {
        const result  = await product.find()
    res.status(200).json({
        count  : result.length ,
        result,
        success : true,
        message : `products   `
    })
    } catch (error) {
      res.status(400).json({
        success : false,
        message : `Error ${error}`
      })  
    }
}

exports.deleteProduct = async(req , res) =>{
  try {
      const result  = await product.deleteMany()
  res.status(200).json({
      count : result.length,
      result,
      success : true,
      message : `Products Delete `
  })
  } catch (error) {
    res.status(400).json({
      success : false,
      message : `Error ${error}`
    })  
  }
}
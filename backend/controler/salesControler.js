const user = require("../model/userModel")
  
// user
exports.addUser = async(req , res) =>{
    try {
        const result  = await user.create(req.body)
    res.status(200).json({
        result,
        success : true,
        message : `User Added `
    })
    } catch (error) {
      res.status(400).json({
        success : false,
        message : `Error ${error}`
      })  
    }
}


exports.getUser = async(req , res) =>{
    try {
        const result  = await user.find()
    res.status(200).json({
        count : result.length ,
        result,
        success : true,
        message : `Users  `
    })
    } catch (error) {
      res.status(400).json({
        success : false,
        message : `Error ${error}`
      })  
    }
}


exports.deleteUser = async(req , res) =>{
  try {
      const result  = await user.deleteMany()
  res.status(200).json({
      count : result.length ,
      result,
      success : true,
      message : `Users Delete `
  })
  } catch (error) {
    res.status(400).json({
      success : false,
      message : `Error ${error}`
    })  
  }
}

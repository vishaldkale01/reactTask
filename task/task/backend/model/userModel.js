const mongoose = require("mongoose")

const userSchem = mongoose.Schema({
    Name  : {type:String , require : true },
    Email : {type:String , require : true },
    Password   : {type:String , require : true },
},{timestamps : true})

module.exports = mongoose.model("user",userSchem)
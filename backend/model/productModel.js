const mongoose =require("mongoose")
const productSchema = mongoose.Schema
(
    {
invoice_No :     {type:String, require : true},
invoice_Date    :{type:String,},
customer_Name  :{type:String, require : true},
Product_Name    :{type:String, require : true},
Delivery_type   :{type:String, require : true},
Qty             :{type:Number, require : true},
Price           :{type:Number, require : true},
subtotal        :{type:Number, require : true},
mode            :{type:String, require : true}
},
{timestamps : true})

module.exports = mongoose.model("product",productSchema)
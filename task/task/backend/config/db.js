const mongoose = require("mongoose")
require("colors")

const db = async e =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`db connected`.bgGreen);
    } catch (error) {
        console.log(`connection error ${error}`.bgRed);
        process.exit()
    }
}
module.exports = db
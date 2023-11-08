const mongoose = require("mongoose")
const JewelrySchema = mongoose.Schema({
type: String,
material: String,
price: Number
})
module.exports = mongoose.model("Jewelry",
JewelrySchema)
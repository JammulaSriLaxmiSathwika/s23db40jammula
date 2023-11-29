const { Double } = require("mongodb")
const mongoose = require("mongoose")
const JewelrySchema = mongoose.Schema({
type: {
    type: String,
    required: true
},
material: {
    type: String,
    required: true
},
price: {
    type: Number,
    required: true,
    min: 100,
    max: 4000
}
})
module.exports = mongoose.model("Jewelry",
JewelrySchema)
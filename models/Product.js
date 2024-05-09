const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description  : {
        type : String,
        required : true
    },
    price : {
        type: Number
    }
});

const Product = mongoose.model("Product",productSchema);

module.exports = Product; // 다른 폴더에서 사용 가능 .

const productModel = require("../models/Product");


exports.createProduct = (req,res,next)=>{

const model = productModel.create(req.body);
// res.status(201); 
res.status(201).json(model);

};

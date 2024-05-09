const express = require('express');

const router =  express.Router();
// express 를 이용해서 router를 사용한다.

const productController = require("./controller/products");
router.get("/",productController.hello);

module.exports = router;

//KhCv7OzwHQjC6mr7

// describe("Mock Test",()=>{
// const Mock = jest.fn();

// mockFuntion()
// mockFuntion("가짜 인자를 넘기기");

// mockFuntion.mockReturn('가짜 결과값을 넘기기')
// console.log(mockFuntion) // 결과  : 가짜 결과값을 넘기기

// // 같이 호출된 값 
// expect(mockFuntion).toBeCalledWith('가짜 인자를 넘기기')
// // 몇번 호출 되었는가 
// expect(mockFuntion).toBeCalledTimes(2);

// })

const productController = require("../../controller/products");
const productModel = require("../../models/Product");
const httpMocks = require('node-mocks-http');
const newProduct = require("../../test/data/new-product.json");

productModel.create = jest.fn();

//beforeEach 공통된 코드 
let req,res, next;
beforeEach(()=>{
     req = httpMocks.createRequest();
     res = httpMocks.createResponse();
     next = null; 
})


describe("Product Controller Create",()=>{

    beforeEach(()=>{
        req.body = newProduct;
    })

    it("should have a createProduct",()=>{
        expect(typeof productController.createProduct).toBe("function")
    })

      //node-mocks-http 를 이용해서 req를 사용 할 수 있다.
    it("should call Model.create",()=>{

        productController.createProduct(req,res,next);
        expect(productModel.create).toBeCalledWith(newProduct);
    })

    // 성공적으로 데이터를 create를 하면 201 status를 보낸다.
    it("should status 201",()=>{

        productController.createProduct(req,res,next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    })


    it("should return mockreturn",()=>{

        productModel.create.mockReturnValue(newProduct);
        productController.createProduct(req,res,next);
        expect(res._getJSONData()).toStrictEqual(newProduct);




    });



});
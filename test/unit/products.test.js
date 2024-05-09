
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


describe("Product Controller Create",()=>{

    it("should have a createProduct",()=>{

        expect(typeof productController.createProduct).toBe("function")


    })


});
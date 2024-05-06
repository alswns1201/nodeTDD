const express = require('express');

const PORT = 5000;

const app = express();

app.use(express.json()); 
// express 4.16.0 이후 부터는 express 에 들어있는 미들웨어 함스로 bodyParser모듈로 대체해준다.
// 


// 라우터 불러오기 
const productRoutes = require("./routes");

app.use("/api/products",productRoutes);



app.get('/',(req,res)=>{
    res.send('Hello Word');
});

app.listen(PORT);

const express = require('express');

const PORT = 5000;

const app = express();

app.use(express.json()); 
// express 4.16.0 이후 부터는 express 에 들어있는 미들웨어 함스로 bodyParser모듈로 대체해준다.
// 


// 라우터 불러오기 
const productRoutes = require("./routes");

const mongoose = require('mongoose');

//비밀번호 KhCv7OzwHQjC6mr7
mongoose.connect('mongodb+srv://alswns1201:KhCv7OzwHQjC6mr7@cluster0.mw7ltd7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


app.use("/api/products",productRoutes);


app.get('/',(req,res)=>{
    res.send('Hello Word');
});

app.listen(PORT);

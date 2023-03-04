const mongoose = require('mongoose');
const url = "mongodb://0.0.0.0:27017/tradingApp"
mongoose.connect(url,{
    useNewUrlParser:true
}).then(()=>{
    console.log("Database connected")
})
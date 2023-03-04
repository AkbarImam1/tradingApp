const mongoose = require('mongoose');
const item = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    price:{
        type:Number
    },
    rating:{
        type:Number
    },
    reviews:{
        type:Number
    }
})

const login = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    },
    purchasedItem:[item],
    image:{
        type : String,
        data :Buffer
    }
})

const Login = new mongoose.model("Login",login);
module.exports = Login;
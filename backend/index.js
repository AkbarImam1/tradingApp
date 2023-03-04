require('./mongoose');
const Login = require('./userSchema');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
// const Order = require('./orderSchema');
const { json } = require('body-parser');
// const Product = require('./product');
//const paymentRoute = require('./paymentRouter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:3000"
}))

app.get('/', (req, res) => {
    res.json({ msg: "ok" });
})
app.get('/login', (req, res) => {
    try {

        const email = req.body.email;
        const password = req.body.password;

        Login.findOne({ email: email })
            .then((foundUser) => {
                if (foundUser) {
                    if (foundUser.password === password) {
                        res.json({
                            msg: "ok"
                        });
                    }
                }
            })
            .catch((error) => {
                //When there are errors We handle them here

                console.log(err);
                res.json({
                    msg:"bad request"
                })
            });

    } catch (e) {
            console.log("Error")
    }
})

app.post('/register',(req,res)=>{
        const {name , email , phone, password }  = req.body;

        const newUser = new Login({
            name : name,
            email:email,
            phone:phone,
            password:password
        })

        newUser.save().then(()=>{
            console.log("Saved");
        })
})


app.listen(8080, () => {
    console.log("Running on port 8080");
})
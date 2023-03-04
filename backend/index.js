require('./mongoose');
// const Customer = require('./schema');
const Seller = require('./sellerSchema');
const Login = require('./userSchema');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require ('body-parser');
// const Order = require('./orderSchema');
const { json } = require('body-parser');
// const Product = require('./product');
//const paymentRoute = require('./paymentRouter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
   origin: "http://localhost:3000"
}))
//app.use('/api',paymentRoute);


app.get('/login', (req, res) => {

   try {
      const email = req.query.email;
      const password = req.query.password;
      
      Login.findOne({phone:email})
      .then((foundUser) => {
          if(foundUser){
              if(foundUser.password === password){
                  res.json(foundUser);
              }
          }
     })
  

   } catch (e) {
      console.log(e);
   }
})


app.post('/register',async(req,res)=>{

  try{  
   const {name,phone,email,password} = req.body 
   const newUser = new Login({
      name:name,
      phone:phone,
      email:email,
      password:password
   })

   newUser.save().then(()=>{
      res.json({msg:"saved"});
   })
  
  }catch(e){
   console.log("Some error")
  }

})

app.post('/signup', (req, res) => {

 
      const { name, email, password, status } = req.body;

      const newCustomer = new Customer({
         name: name,
         email: email,
         password: password,
         status: status
      });
      newCustomer.save((err) => {
         if (!err) {
            console.log('successfully added') 
            res.json({ status: 'ok' , verify : "successfully register"});
         } else {
            console.error(err);
            res.json({status:'something went wrong'})
         }
      });
      
})

app.post('/order', (req,res)=>{
   const {fullName,phoneNumber,houseNumber,street,city,Pincode,orderProduct}= req.body;
   const newOrder = new Order({
      order : {
         name : fullName,
         phone : phoneNumber ,
         house_Number: houseNumber,
         village_or_street : street,
         town_city : city,
         pincode : Pincode
      },
      orderItems : {
         title: orderProduct.title,
         image: orderProduct.image,
         price: orderProduct.price,
         qty : orderProduct.qty
         
      },
      payment : {
         paymentMethod : "paypal",
         name: "paypal"
      }
     
   }) 
   newOrder.save((err) => {
      if (!err) {
         console.log('successfully added') 
         res.json({ message: 'ok' , verify : "successfully"});
      } else {
         console.error(err);
         res.json({status:'something went wrong'})
      }
   });
   
})

app.put('/pay', async (req,res)=>{
   const order =  await Order.findById(req.params.phone);
   if(order){
      order.isPaid = true;
      order.paidAt = Date.now();
      order.payment = req.params.payment;
      const orderPaid = await order.save();
      res.json({message : "Order is Paid" , data : orderPaid});
   }else{
      res.status(404).json({message : "order is not found"});
   }
})

app.get('/admin', async(req,res)=>{

   try {
      
      
      Product.find( (err, data) => {
         if (err) {
            console.log("Some error is occuring")
         }
         else {
            if(data){
               res.json({data:data});
               console.log("data successfully fetched");
               //console.log(data);
            }else{
               res.json({data:[]})
            }                                 

         }
      })

   } catch (e) {
      console.log(e);
   }

})


app.post('/admin',async (req,res)=>{

   try{
      const {Id,Title,Price,Discription,Category,Image,rating} = req.body;

      const newProduct = new Product({
         id : Id,
         title : Title,
         price:Price,
         discription : Discription,
         category : Category,
         image : Image,
         rating : rating

      })
         newProduct.save((err)=>{
         if(!err){
            console.log("Successfully added");
            res.json({message:"Added"});
         }else{
            console.log(err);
         }
      })

   }catch(e){
      console.log(e);
   }

})

// Set up the API route for handling seller sign-ups
app.post('/seller', async (req, res) => {
    // Create a new seller object based on the request body
    const seller = new Seller({
      name: req.body.name,
      shopName: req.body.shopName,
      email: req.body.email,
      phone: req.body.phone,
      city: req.body.city,
      address: req.body.address,
      gstNo: req.body.gstNo,
      panNo: req.body.panNo,
      shopType: req.body.shopType
    });
    
    try {
      // Save the new seller to the database
      const result = await seller.save();
      res.send(result);
    } catch (ex) {
      console.log(ex.message);
      res.status(400).send('Error: ' + ex.message);
    }
  });
  

app.listen(8080, () => {
   console.log("Runniing on 8080")
})


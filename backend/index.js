//express basic setup
const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const OldRouter=require('./Router/OldRouter.js');
const NewRouter=require('./Router/NewRouter.js');
const userRouter = require('./Router/userRouter.js');
const uri="mongodb://localhost:27017/HolyBible";
mongoose.connect(uri);
const connection=mongoose.connection;
const app=express();


//http://localhost:2000/  
connection.once('open',()=>{
console.log("Mongoose database Connected successfully");
app.get('/',(req,res)=>{res.send("Welcome to my Page");})
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

//http://localhost:2000/users/user
app.use('/oldtestaments',OldRouter);
app.use('/newtestaments',NewRouter);
app.use('/users',userRouter);
app.listen(2000,()=>{console.log("The server is running");})

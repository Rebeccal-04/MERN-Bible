const express = require('express');
const Users = require('../Model/userModel.js');
const userRouter = express.Router();
//localhost:2000/users/all
userRouter.get('/all',(req,res)=>{
Users.find()
.then(users =>res.json(users))
.catch(err =>res.status(400).json("Error:"+err))
})
//localhost:2000/users/add
userRouter.post ('/add',(req,res)=>{
const username=req.body.username;
const email=req.body.email;
const feedback=req.body.feedback;
const newUser=new Users(({username,email,feedback}));
newUser.save()
.then (()=>{res.json('User feedback Added successfully')})
.catch(err=>res.status(400).json("Error:"+err))
})
//localhost:2000/users/90787789787
userRouter.delete('/:id',(req,res)=>{
Users.findByIdAndDelete(req.params.id)
.then(()=>{res.json("User feedback Deleted successfully")})
.catch(err=>res.status(400).json("Error:"+err))
})
//localhost:2000/users/90787789787
userRouter.post('/update/:id',(req,res)=>{
Users.findById(req.params.id)
.then(user=>{
user.username=req.body.username;
user.email=req.body.email;
user.feedback=req.body.feedback;
user.save()
.then(()=>res.json("User feedback Updated successfully"))
.catch(err=>res.status(400).json("Error:"+err))
})
.catch(err=>res.status(400).json("Error:"+err))
})
module.exports=userRouter
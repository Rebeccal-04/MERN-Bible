const express = require('express');
const Users = require('../model/NewModel.js')
const NewRouter = express.Router();

//localhost:2000/users/all
NewRouter.get('/NewTable',(req,res)=>{
	Users.find()
	.then(newtestaments => res.json(newtestaments))
	.catch(err=> res.status(400).json("Error:"+err))
})
module.exports = NewRouter
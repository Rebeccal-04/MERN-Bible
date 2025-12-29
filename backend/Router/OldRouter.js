const express = require('express');
const Users = require('../model/OldModel.js')
const OldRouter = express.Router();

//localhost:2000/users/all
OldRouter.get('/OldTable',(req,res)=>{
	Users.find()
	.then(oldtestaments => res.json(oldtestaments))
	.catch(err=> res.status(400).json("Error:"+err))
})


module.exports = OldRouter
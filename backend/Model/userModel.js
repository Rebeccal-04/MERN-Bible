const mongoose=require('mongoose');
const schema=mongoose.Schema;
const userSchema=new schema({
username:{
type:String,
required:true
},

email:{
type:String,
required:true
},

feedback:{
type:String,
required:true}
})
const userLogin=mongoose.model('FeedBack',userSchema);
module.exports=userLogin;
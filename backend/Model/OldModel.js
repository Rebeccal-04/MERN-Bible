const mongoose=require('mongoose');
const schema=mongoose.Schema;
const OldTableSchema=new schema({
OldTestament:{
type:String,
required:true
}
})
const oldtestaments=mongoose.model('oldtestaments',OldTableSchema);
module.exports=oldtestaments;
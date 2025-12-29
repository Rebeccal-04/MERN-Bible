const mongoose=require('mongoose');
const schema=mongoose.Schema;
const NewTableSchema=new schema({
NewTestament:{
type:String,
required:true
}
})
const newtestaments=mongoose.model('newtestaments',NewTableSchema);
module.exports=newtestaments;
const mongoose=require('mongoose');
//creating the Schema
const userSchema=new mongoose.Schema({
         firstName:{
             type:String,
             required:true
         },
         lastName:{
             type:String,  
             required:true
         },
         email:{
             type:String,
             required:true
         }
});
const user = mongoose.model("User",userSchema);
module.exports = user;
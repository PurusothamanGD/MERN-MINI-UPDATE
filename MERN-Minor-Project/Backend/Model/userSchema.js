const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    e_mail:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true
    },
   
})

module.exports=mongoose.model('data',userSchema)
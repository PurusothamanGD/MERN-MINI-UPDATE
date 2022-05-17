const mongoose = require('mongoose')

const   imageSchema= new mongoose.Schema({
    imageName:{
        type:String,
        require:true
    },
    imagePath:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('image',imageSchema)
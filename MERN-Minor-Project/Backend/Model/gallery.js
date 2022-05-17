const mongoose = require('mongoose')

const   gallerySchema= new mongoose.Schema({
    imageName:{
        type:String,
        require:true
    },
    routeinfo:{
        type:String,
        required:true
    },
    imageDesc:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('gallery',gallerySchema)
const Image = require('../Model/imageSchema')

exports.postUrl = (req,res)=>{
    Image.create({imageName:req.body.imageName,imagePath:req.body.imagePath})
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
}

exports.getUrl =(req,res)=>{
    Image.find({})
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });

}
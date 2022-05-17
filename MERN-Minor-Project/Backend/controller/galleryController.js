const gallery = require('../Model/gallery')
const Gallery=require('../Model/gallery')

exports.postimg = (req,res)=>{
    gallery.create({imageName:req.body.imageName,routeinfo:req.body.routeinfo,imageDesc:req.body.imageDesc})
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
}

exports.getimg =(req,res)=>{
    gallery.find({})
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });

}

exports.deleteimg = (req,res)=>{
    gallery.remove({_id:req.params.id})
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
}
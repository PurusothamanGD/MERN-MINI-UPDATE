module.exports=(app)=>{
    const validatetoken = require('../bcrypt')
    const User=require('../controller/controller')
    const Image = require('../controller/imageController')
    const gallery = require('../controller/galleryController')

    // Routes for user Authentication
    app.post('/signup',User.newUser)
    app.get('/getUsers',User.getUsers)
    app.put('/updateUsers/:id',User.updateUser)
    app.delete('/deleteUsers/:id',User.deleteUser)

    // app.get('/connect',(req,res)=>{
    //     res.send("Both node and react is connected")
    // })
    app.post('/signin',User.signin)


    // app.get('/protectedroute',async function(req,res,next){
    //     try {
    //         console.log("Protected")
    //         const {jwtToken}=req.cookies
    //         // console.log(jwtToken)
    //         const valid = await validatetoken.validatetoken(jwtToken)
    //         if(valid){
    //             next();
    //         }else{
    //             res.send("Access Denied")
    //         } 
    //     } catch (error) {
    //         res.send(error)
    //     }
        
    // },User.protected)

    // Routes for Image URL
        app.post('/postURL',Image.postUrl)
        app.get('/getURL',Image.getUrl)

    //routes for gallery

        app.post('/postimg',gallery.postimg)
        app.get('/getimg',gallery.getimg)
        app.delete('/deleteimg/:id',gallery.deleteimg)


}
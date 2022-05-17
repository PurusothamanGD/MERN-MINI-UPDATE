const express = require ('express')
const mongoose=require('mongoose')
const body=require('body-parser')
const cookie=require('cookie-parser')
var cors = require("cors");
const config=require('./config/config')
const app= express();

app.use(body.urlencoded({ extended: true }))
app.use(body.json())
app.use(cors());
app.use(cookie())

mongoose.Promise = global.Promise

mongoose.connect(config.url, { useUnifiedTopology: true , useNewUrlParser: true })
    .then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });

require('./routes/routes')(app)
    
app.listen(4000,()=>{
    console.log("Successfuly running at port")
})
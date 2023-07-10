const express = require("express");
const app = express();

const https = require("https");


app.get("/",function(req,res){

    https.get("https://www.google.com/" , function(response){
        console.log(response.statusCode);
    })
    res.send("server is running")
})

app.listen(3000,function(){
    console.log("server is running");
})
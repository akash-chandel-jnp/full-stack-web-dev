
//jshint esversion:6;
const express = require("express");
const app = express();
app.get("/",function(request,response){
    response.send("<h1>Hello World!</h1>");
});
app.get("/contact",function(req,res){
    res.send("Contact me at akashchandel@gmail.com")
});

app.get("/hobbies",function(req,res){
    res.send("<ui><li>coding<li/><li>earning</li><ui>")
});

app.get("/about", function(req, res){
    res.send("I am a learner who wants to create tech and wealth")
})

app.listen(3000, function(){
    console.log("our server is running on port 3000");
    
});
//jshint esversion:6;

// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of the Express application
const app = express();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Handle GET requests to the root URL ("/")
app.get("/", function(req, res) {
    // Send the index.html file as the response
    res.sendFile(__dirname + "/index.html");
});

// Handle POST requests to the root URL ("/")
app.post("/", function(req, res) {
    // Extract the values of n1 and n2 from the request body
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    // Perform the calculation (addition in this case)
    var result = num1 + num2;

    // Send the result as the response
    res.send("The result of the calculation is " + result);
});

app.get("/bmiCalculator", function(req, res) {
    // Send the index.html file as the response
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator.html",function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight/(height*height);

    res.send("Your BMI is " + bmi);
})

// Start the server and listen on port 3000
app.listen(3000, function() {
    console.log("Server has started on port 3000");
});

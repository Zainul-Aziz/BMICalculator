const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/contact",function(req,res){
    res.send("<h1>Any Query Contact:9554423588</h1><h1>Email : zainulaziz29@gmail.com</h1>");
})
app.post("/",function(req,res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var bmiIndex = Math.round(weight/(height*height)*100);
    
    res.send("<h1 style=\"text-align:center; margin-top:30px\">Your BMI index is : " + bmiIndex/100 + "</h1>");
})
app.get("/",function(req,res){
    //console.log(__dirname);
    res.sendFile(__dirname + "/bmiCalculator.html");
})


app.listen(process.env.PORT || 3000,function(req,res){
    console.log("Server is running at 3000 port.");
})
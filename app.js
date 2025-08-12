const express = require("express");

const dotenv = require('dotenv');
dotenv.config();

const app = express();

const path = require("path");

app.use('/static',express.static(path.join(__dirname,'static files')));

app.use(express.json());



app.get('/',(req,res)=>{
    console.log("This is landing page");
    res.send("This is Landing page");
});

app.post("/about",(req,res)=>{
    const {name} = req.body;
    console.log("This is about page");
    res.send(`This is About Page and name is ${name}`);
});

app.get("/home",(req,res)=>{
    console.log("This is home page");
    res.send("This is Home Page");
});

app.get("/contact",(req,res)=>{

    res.send("This is contact us Page");
});

app.get("/image",(req,res)=>{
    res.sendFile(path.join(__dirname,'image.jpg'));
});

app.get("/file",(req,res)=>{
    res.sendFile(path.join(__dirname,'cv.pdf'));
});

app.get('/new_feature',(req,res)=>{
    res.send("new feature added");
});


const PORT = process.env.PORT || 5000;




app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});



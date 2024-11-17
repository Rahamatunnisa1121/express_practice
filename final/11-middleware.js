const express=require('express');
const app=express();
const logger=require('./logger');
const authorize=require('./authorize');

app.get('/',(req,res)=>{
    res.send("<h1>Home page</h1>");
});

app.get('/about',[logger,authorize],(req,res)=>{
    console.log(req.user);
    res.send("<h1>About page</h1>");
});

app.get('/api/products',(req,res)=>{
    res.send("products");
});

app.get('/api/items',(req,res)=>{
    res.send("items");
});

app.listen(5000,()=>{
    console.log("server is listening on port 5000");
});
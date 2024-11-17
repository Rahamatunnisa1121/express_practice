const express=require('express');
const app=express();
const logger=require('./logger');
const authorize=require('./authorize');

//order matters, if app.use() is after app.get('/',..), the home page will have middleware accessibility
//When a request is made, app.use() middleware functions are executed in order, checking paths as specified, and passing control to the next middleware or route handler with next().
app.use([authorize,logger]);//for all paths
//app.use('/api',logger); //for paths starting with /api

app.get('/',(req,res)=>{
    res.send("<h1>Home page</h1>");
});

app.get('/about',(req,res)=>{
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
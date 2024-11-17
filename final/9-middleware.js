const express=require('express');
const app=express();

//req => middleware => res

//express will supply these paramerers automatically
const logger=(req,res,next)=>{
    const method=req.method;
    const url=req.url;
    const time=new Date().getFullYear();
    // returns the current year as a four-digit number
    console.log(method,url,time);
    //res.send('Testing');//either send something to terminate the whole cycle or pass it to next middleware
    next(); //next is a function
    // Call next to proceed to the next middleware or route handler
};

//middleware is referenced by name, and Express will pass req, res, and next parameters automatically when the route is hit.
app.get('/',logger,(req,res)=>{
    res.send("<h1>Home page</h1>");
});

app.get('/about',logger,logger,(req,res)=>{
    res.send("<h1>About page</h1>");
});

app.listen(5000,()=>{
    console.log("server is listening on port 5000");
});
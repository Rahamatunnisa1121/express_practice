const express=require('express');
//not buitl-in, needs to be installed
const app=express();
//express() function, it initializes a new Express application
//creates an instance of an Express application, assigned to app

//get method to handle get requests

//for root route
app.get('/',(req,res)=>{
    console.log("User hit the port..")
    res.status(200).send("Home page");
});//the registered callback is invoked everytime, a user performs a get request

//for about page
app.get('/about',(req,res)=>{
    console.log("User hit the port..")
    res.status(200).send("About page");
});

//for any other -> customized 404 repsonse
//all method that handles all types of http requests
// for any path (due to the '*' wildcard).
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resourec not found.. 404');
    //can chain methods
});
//routing works in the order that routes are defined

app.listen(5000,()=>{
    console.log("server is listening on port 5000..");
});
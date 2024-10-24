const express=require('express');
const app=express();
const path=require('path'); //buitlin with node
//to work with file and directory paths

app.use(express.static('./public')); //index.html is also static and it is served by default
//for setup static and middleware

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'));//to resolve the relative path into absolute path acc to our file structure
//     // Express.js, you can technically provide a relative path directly in res.sendFile(), like res.sendFile('./navbar-app/index.html')
//     //by adding to static assets
//     //server side rendering(SSR)
// });

app.all('*',(req,res)=>{
    res.status(404).send("Resource not found..");
});

app.listen(5000,(req,res)=>{
    console.log("Server is listening on the port 5000..");
});
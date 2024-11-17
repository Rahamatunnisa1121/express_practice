const express=require('express');
const app=express();
const {products}=require('./data.js')

app.get('/',(req,res)=>{
    //to send the json response and convert the data into a json string
    //content-type is also set sutomatically
    //res.json(products);

    res.send('<h1>Home page</h1><a href="/api/products">products</a>');
});

// app.get('/api/products',(req,res)=>{
//     const newProduct=products.map((product)=>{
//         const {id,name,image}=product;//destructuring assignment
//         return {id,name,image}
//     });
//     res.json(newProduct);
// });

// app.get('/api/products/1',(req,res)=>{
//     const singleProduct=products.find((product)=>product.id===1)
//     res.json(singleProduct);
// });

//:productID is a route parameter
app.get('/api/products/:productID',(req,res)=>{
    console.log(req);
    console.log(req.params);
    const singleProduct=products.find((product)=>product.id===parseInt(req.params.productID));//because everything returned is a string.
    //or can use Number instead of parseInt
    if(singleProduct)
    {
        res.json(singleProduct);
    }
    else //undefined singleProduct
    {
        res.status(404).json({message:'Product not found'});
    }
});
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params);
    res.send("hello");
});
app.listen(5000,()=>{
    console.log("Server is listening on port 5000..");
});



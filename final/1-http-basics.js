const http=require('http');
const server=http.createServer((req,res)=>{
    console.log("User hit the server..");
    console.log(req.method); //the method is a property to get the type of req that the client made
    console.log(req.url);
    const url=req.url;
    // the text/html is a mime->multipurpose internet mail extension
    //writeHead method is used in HTTP servers to set the HTTP response status code and headers before sending the response body to the client
    if(url==='/')
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<h1>Home page</h1>");
    }
    else if(url==='/about')
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<h1>About Page</h1>");
    }
    else
    {
        res.writeHead(404,{"content-type":"text/html"});//page not found->404
        res.write("<h1>Page not found..</h1>");
    }
    res.end();//communication is over
});
server.listen(5000);//5000 port is communication endpoint
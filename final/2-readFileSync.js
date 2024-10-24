const http=require('http');
const {readFileSync}=require('fs');

//get all files
const homepage=readFileSync('./index.html','utf8');
const aboutpage=readFileSync('./about.html','utf8');
const notfoundpage=readFileSync('./pagenotfound.html','utf8');

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
        res.write(homepage);
    }
    else if(url==='/about')
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.write(aboutpage);
    }
    else
    {
        res.writeHead(404,{"content-type":"text/html"});//page not found->404
        res.write(notfoundpage);
    }
    res.end();//communication is over
});
server.listen(5000);//5000 port is communication endpoint
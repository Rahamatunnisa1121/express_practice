const http=require('http');
const {readFile}=require('fs');
//async

const serveFile=(filepath,res,contentType)=>{
    readFile(filepath,'utf8',(err,data)=>{
        if(err)
        {
            res.writeHead(500,{'content-type':'text/html'});
            res.write("<h1>Internal server error..</h1>");
            res.end();
            return; //stop the execution if error
        }
        res.writeHead(200,{'content-type':contentType});
        res.write(data);
        res.end();
    });
};

const server=http.createServer((req,res)=>{
    console.log("User hit the server..");
    console.log(req.method);
    const url=req.url;
    if(url==='/')
    {
        serveFile('./index.html',res,'text/html');
    }
    else if(url==='/about')
    {
        serveFile('./about.html',res,'text/html');
    }
    else
    {
        serveFile('./pagenotfound.html',res,'text/html');
    }
});

server.listen(5000,()=>{
    console.log("server listening on the port 5000");
});
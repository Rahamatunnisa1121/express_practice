//When you load an HTML page in a web browser that 
//includes links to external CSS, JavaScript, and image files, 
//the browser makes separate HTTP requests for each of those resources. 
//If your server isn't set up to handle those requests, those resources 
//will not load, resulting in the static output

const http=require('http');
const {readFileSync}=require('fs');

const indexpage=readFileSync('./navbar-app/index.html','utf8');
const stylespage=readFileSync('./navbar-app/styles.css','utf8');
const scriptpage=readFileSync('./navbar-app/browser-app.js','utf8');
const svgpage=readFileSync('./navbar-app/logo.svg');

const server=http.createServer((req,res)=>{
    console.log("User hit the server..");
    console.log(req.method); 
    console.log(req.url);
    const url=req.url;

    if(url==='/')
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.write(indexpage);
    }
    else if(url==='/styles.css')
    {
        res.writeHead(200,{"content-type":"text/css"});
        res.write(stylespage);
    }
    else if(url==='/browser-app.js')
    {
        res.writeHead(200,{"content-type":"application/javascript"});
        res.write(scriptpage);
    }
    else if(url==='/logo.svg')
    {
        res.writeHead(200,{"content-type":"image/svg+xml"});
        res.write(svgpage);
    }
    else
    {
        res.writeHead(404, { "content-type": "text/html" });
        res.write("<h1>Page not found</h1>");
    }
    res.end();
});
server.listen(4000);



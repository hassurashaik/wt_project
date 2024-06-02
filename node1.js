const fs=require('fs');
const http=require('http');
const file=fs.readFileSync('index.html');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(file);
});
server.listen(80,'127.0.0.1',()=>{
    console.log('listening on port 80');
});

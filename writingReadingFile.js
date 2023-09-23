
const http1 = require("http");
const fs = require('fs');
fs.readFile('message.txt', (err, data) => {
    console.log(data);
  });
const server  = http1.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/')
    {
            var data =fs.readFileSync('message.txt','utf8')
            res.write("<html>");
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body><h1>${data}</h1><form action="/message" method="POST"><input type ="text" name="message"><button type="submit">Send</button></form></body>`);
            res.write('</html>');
            return res.end();

    }
    if(url === '/message' && method === 'POST'){
        const body =[];
        req.on('data',(chunk)=>{
            //console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            //console.log(parsedBody);
            const message =parsedBody.split("=")[1];
            fs.writeFile('message.txt',message,err=>{
                res.statusCode = 302
                res.setHeader('Location','/');
                return res.end();
            });
            
        })

        //fs.writeFileSync('message.text','DUMMY');
        //res.writeHead(302,{jsheaders})

    }
    res.setHeader('Content-Type','text/html');
    res.write("<html>");
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();

    //process.exit();
})
server.listen(3000);
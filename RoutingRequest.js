
const http1 = require("http");

const server  = http1.createServer((req,res)=>{
    const url = req.url;
    if(url === '/')
    {
        res.write("<html>");
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type ="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === "/home")
    {
        res.write("<html>");
        res.write('<head><title>My first Page</title></head>');
        res.write('<body><h1>Welcome home Nitin</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if(url ==="/about")
    {
        res.write("<html>");
        res.write('<head><title>My About page</title></head>');
        res.write('<body><h1>Welcome To about us Page</h1></body>');
        res.write('</html>');
        return res.end();
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
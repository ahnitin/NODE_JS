//const http1 = require("./http.js"); 
const http1 = require("http");

// function rqListener(req, res){

// }
// http1.createServer(rqListener);  

const server  = http1.createServer((req,res)=>{
    
    console.log("Nitin Ahuja");
})
server.listen(4000);
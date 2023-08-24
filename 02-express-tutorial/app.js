const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(`whatever`)
    res.end(`hello world`)
})

server.listen(5000)
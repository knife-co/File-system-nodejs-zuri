const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
    console.log(req.url, req.method);

    res.setHeader('content-Type', 'text/html');

    let path = './zuri/';
    switch(req.url){
        case '/':
            path += 'home.html';
            break;
        case '/home':
            path += 'home.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/contact':
            path += 'contact.html'
            break;
        default:
            path += '404.html'
            break;
    }
    
    fs.readFile(path, (err,data) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })
})

//create a port
server.listen(4000, 'localhost')

console.log("yes you have created a server")
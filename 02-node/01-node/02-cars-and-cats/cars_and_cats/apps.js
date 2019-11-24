const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    
    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cats") {
         fs.readFile('cats.html', 'utf8', (errors, contents) => {
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    if (request.url === "/cars/new") {
        fs.readFile('cars_new.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
   }
    else {
        response.end('File not found!!!');
    }
});
server.listen(7707);
console.log("listening on port 7707");
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    }
    else if (req.url === '/api') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        const obj = {
            firstname: 'Jon',
            lastname: 'Snow'
        };

        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(404);
        res.end();
    }
    
}).listen(1337, '127.0.0.1');
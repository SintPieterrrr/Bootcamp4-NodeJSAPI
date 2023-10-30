const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.method, req.url)

    switch (req.method) {
        case "GET":
            // Response from out server
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end('{melding:"GET request succesful"}');
            break;
        default:
            res.statusCode = 405;
            res.setHeader('Content-Type', 'application/json');
            res.end('{melding:"' + req.method +' not allowed"}');
    }
    // console.log(req)
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
const http = require('http');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://ptr:Ria3AHgniE1Pig5X@fontystest.xpionfk.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect().then(() => {
    const auto_db = client.db("api");
    console.log(auto_db);
})


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
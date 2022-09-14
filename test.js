var fs = require('fs'); 
var http = require('http'); 
const SECRET = 'fcd3ecda';

var server = http.createServer(function (req, res) 
{ 
    if (req.headers['x-secret'] != SECRET)
       res.writeHead (403).end('Secret incorrect');
    var body = []; 
    req.on('data', function (chunk) {
       body.push(chunk); })
     .on('end', function () {
        body = JSON.parse(Buffer.concat(body).toString())
        fs.writeFileSync(body.filename, body.file); res.writeHead (200);
        res.end('OK'); 
    });
});
server.listen (7654);
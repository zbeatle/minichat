var http = require('http');
var url = require('url');
var fs = require('fs');
var messages = 'Hello \n'
http.createServer(function (req, res) {
    fs.readFile('test.html', function (err,data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var q = url.parse(req.url, true).query;
        if(q.messsage !== 'undefined'){
            messages += q.message + '<br>';
        }
        res.write(data + messages);
        return res.end();
    });
}).listen(4567); 

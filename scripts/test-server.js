/**
 * Created by Chris on 10/16/13.
 */
var Router = require('node-simple-router');
var http = require('http');
var td = require('../test/helpers/testdata.js');
var router = Router({static_route:'#{__dirname}/../'});
server = http.createServer(router);
server.listen(8889);

 router.get('/useraccounts', function (request, response) {
    var data = new td.userAccounts();
    var responseData = JSON.stringify(data);
     response.writeHead(200, {
         'Content-Length':responseData.length,
         'Content-Type': 'application/json'
     });
     response.end(responseData,'utf8');
 });

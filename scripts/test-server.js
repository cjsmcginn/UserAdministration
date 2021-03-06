/**
 * Created by Chris on 10/16/13.
 */
var Router = require('node-simple-router');
var http = require('http');
var td = require('../test/helpers/testDataModule.js');
var router = Router({static_route:'#{__dirname}/../'});
server = http.createServer(router);
server.listen(8889);
//helpers
function pageify(pgr,arr){
    var stidx = (pgr.pageIndex * pgr.pageSize)-pgr.pageSize;
    var newList = [];
    for(var i = stidx;i<stidx+pgr.pageSize;i++)
    {
        if(i<=pgr.totalRecords)
            newList.push(arr[i]);
    }
    return newList;
}
function pagedList(total,pageIndex,pageSize){
    pageIndex = Number(pageIndex)>0?Number(pageIndex):1;
    pageSize= Number(pageSize)>0?Number(pageSize):9999;
    var pager = {
        totalRecords:total,
        pageIndex:pageIndex,
        pageSize:pageSize
    };

        var pages = pager.totalRecords%pager.pageSize;
        if(pages == 0)
            pager.totalPages = pager.totalRecords/pager.pageSize;
        else{
            var np = pager.totalRecords/pager.pageSize;
            if(np>Math.round(np))
               pager.totalPages = Math.round(np)+1;
            else
                pager.totalPages = Math.round(np);
    }
    return pager;
}

router.get('/useraccounts',function(request,response){
    var data = td.userAccounts;
    var total = data.Accounts.length;
    var pgr = pagedList(total,1,total);

    data.pager = pgr;
    var responseData = JSON.stringify(data);
    response.writeHead(200, {
        'Content-Length':responseData.length,
        'Content-Type': 'application/json'
    });
    response.end(responseData,'utf8');
});
 router.get('/useraccounts/:pageIndex/:pageSize', function (request, response) {
    var data = {list:null,pager:null};
    var total = td.userAccounts.Accounts.length;
    var pgr = pagedList(total,request.params.pageIndex,request.params.pageSize);
    data.pager = pgr;
    data.list =pageify(data.pager,td.userAccounts.Accounts);

    var responseData = JSON.stringify(data);
     response.writeHead(200, {
         'Content-Length':responseData.length,
         'Content-Type': 'application/json'
     });
     response.end(responseData,'utf8');
 });
router.post('/useraccounts',function(request,response){

    td.userAccounts.Accounts.push(request.body.user);
    response.end('success','utf8');
});

/**
 * Created by Chris on 10/17/13.
 */
function PagedList(options) {
    var defaultOptions = {
        list: [],
        pageIndex: 1,
        pageSize: 0
    };
    if (typeof options == 'object') {
        options = _.defaults(defaultOptions, options);
    } else {
        options = defaultOptions;
    }
    var result = {
        list: options.list,
        pageIndex: options.pageIndex,
        totalRecords: options.list.length,
        pageSize: options.pageSize,
        totalPages: 0
    };
    if(result.totalRecords>0&&result.pageSize>0)
    {
        var mod = result.totalRecords % result.pageSize;
        if(mod==0)
            result.totalPages = result.totalRecords / result.pageSize;
        else
        {
            var t = result.totalPages = result.totalRecords / result.pageSize;
            if(Math.round(t)<t)
                result.totalPages=t+1;
        }

    }
    return result;
}
var data = new Array();
for (var i = 0; i < 100; i++) {
    data.push('item ' + i.toString());
}
var opts =  {
    list: data,
    pageIndex: 1,
    pageSize: 20
};

var pl = new PagedList(opts);
pl;
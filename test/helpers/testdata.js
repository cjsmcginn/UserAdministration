/**
 * Created by Chris on 10/16/13.
 */
//paged list
var defaultPagedListOptions = {
    list:[],
    pageIndex:1,
    pageSize:0

}
function PagedList(options){

    if (typeof options == 'object') {
        options = $.extend(defaultPagedListOptions, options);
    } else {
        options = defaultPagedListOptions;
    }
    var result = {
        list:options.list,
        pageIndex:options.pageIndex,
        totalRecords:options.list.length,
        pageSize:options.pageSize,
        totalPages:0
        }
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
var count = 0;
var userAccounts = JSON.parse('{"Accounts":[{"Username":"radleyMurray","Password":"988860046","CreatedOnUtc":"2013-10-16T17:25:48.6834861Z","Active":true,"AccountEmail":"porttitor@neceuismod.net"},{"Username":"iaRosario","Password":"436985903","CreatedOnUtc":"2013-09-16T17:25:48.6844913Z","Active":true,"AccountEmail":"quis.diam.Pellentesque@acmattis.co.uk"},{"Username":"iaMorse","Password":"282644135","CreatedOnUtc":"2013-08-16T17:25:48.6844913Z","Active":true,"AccountEmail":"dictum.augue@atfringillapurus.ca"},{"Username":"iperRowland","Password":"186609920","CreatedOnUtc":"2013-07-16T17:25:48.6844913Z","Active":true,"AccountEmail":"tellus.justo@gravida.com"},{"Username":"ylaGreer","Password":"544595294","CreatedOnUtc":"2013-06-16T17:25:48.6844913Z","Active":true,"AccountEmail":"egestas@nequevenenatis.edu"},{"Username":"hoshanaKemp","Password":"233599657","CreatedOnUtc":"2013-05-16T17:25:48.6855006Z","Active":true,"AccountEmail":"adipiscing@orcitinciduntadipiscing.edu"},{"Username":"incentOchoa","Password":"435566294","CreatedOnUtc":"2013-04-16T17:25:48.6855006Z","Active":true,"AccountEmail":"tristique.pharetra@erosnec.net"},{"Username":"acquelineCompton","Password":"281079715","CreatedOnUtc":"2013-03-16T17:25:48.6855006Z","Active":true,"AccountEmail":"arcu.Sed@adipiscingfringilla.edu"},{"Username":"gnaciaFarrell","Password":"389435797","CreatedOnUtc":"2013-02-16T17:25:48.6855006Z","Active":true,"AccountEmail":"ut@vitae.ca"},{"Username":"riscollKemp","Password":"663401958","CreatedOnUtc":"2013-01-16T17:25:48.6865067Z","Active":true,"AccountEmail":"quam.Curabitur.vel@pedeNuncsed.net"},{"Username":"icholeTerry","Password":"662904798","CreatedOnUtc":"2012-12-16T17:25:48.6865067Z","Active":true,"AccountEmail":"odio@eleifendCrassed.edu"},{"Username":"essamineSalas","Password":"869731958","CreatedOnUtc":"2012-11-16T17:25:48.6865067Z","Active":true,"AccountEmail":"Nulla.eu.neque@loremeget.com"},{"Username":"oltObrien","Password":"244348251","CreatedOnUtc":"2012-10-16T17:25:48.6865067Z","Active":true,"AccountEmail":"nec@mattisvelitjusto.org"},{"Username":"adineRush","Password":"296113262","CreatedOnUtc":"2012-09-16T17:25:48.6874415Z","Active":true,"AccountEmail":"pellentesque.tellus@metusfacilisis.edu"},{"Username":"achaHodges","Password":"826948823","CreatedOnUtc":"2012-08-16T17:25:48.6874415Z","Active":true,"AccountEmail":"nonummy.ipsum@tinciduntpedeac.net"},{"Username":"hilipTucker","Password":"662825628","CreatedOnUtc":"2012-07-16T17:25:48.6874415Z","Active":true,"AccountEmail":"sodales.purus@faucibus.ca"},{"Username":"hmedSteele","Password":"914254832","CreatedOnUtc":"2012-06-16T17:25:48.6874415Z","Active":true,"AccountEmail":"Donec.est@cursus.com"},{"Username":"ydneeHess","Password":"430432495","CreatedOnUtc":"2012-05-16T17:25:48.6884908Z","Active":true,"AccountEmail":"dui@nonsapienmolestie.net"},{"Username":"arlaKnight","Password":"958334302","CreatedOnUtc":"2012-04-16T17:25:48.6884908Z","Active":true,"AccountEmail":"diam.Duis.mi@hendrerit.com"},{"Username":"eganHaney","Password":"465948603","CreatedOnUtc":"2012-03-16T17:25:48.6924436Z","Active":true,"AccountEmail":"sem@ante.org"}]}');

module.exports.userAccounts = userAccounts
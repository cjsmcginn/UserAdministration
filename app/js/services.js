'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
/*
 angular.module('myApp.services', []).
 value('version', '0.1');
 */
angular.module('myApp.services', ['ngResource'], function ($provide) {
    $provide.factory('UserAccountService', function ($resource) {
        var UserAccount =  $resource('/useraccount/:id', null, {
            get: {method: 'GET'},
            post: {method: 'POST'},
            delete:{method:'DELETE',params:{id:'@id'}},
            put:{method:'PUT'}
        });
        var UserAccounts =  $resource('/useraccounts/:pageIndex/:pageSize', null, {
            get: {method: 'GET'}
        });
        return {
            UserAccounts: {
               list:function(options){
                  UserAccounts.get({pageIndex:options.pageIndex,pageSize:options.pageSize},options.success);
               }
            },
            UserAccount:{
                get:function(options){
                    return UserAccount.get({id:options.id},options.success);
                },
                delete:function(options){
                    return UserAccount.delete({id:options.id},options.success,options.failure);
                },
                post:function(options){
                    return UserAccount.post({user:options.user},options.success,options.failure);
                },
                put:function(options){
                    return UserAccount.put({user:options.user},options.success,options.failure);
                }
            }
        }
    });

});
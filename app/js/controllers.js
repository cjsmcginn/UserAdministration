'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services','myApp.models'])
    .controller('UserAdministrationController', ['$scope', 'UserAccountService','UserModel', function ($scope, userAccounts,UserModel) {
        /*member methods*/
        var putUserAccount=function(account){
            var options = {
                user:account,
                success: function (response) {
                    $scope.getUserAccounts();
                }
            };
            userAccounts.UserAccount.put(options);
        };
        var postUserAccount=function(account){
            var options = {
                user:account,
                success: function (response) {
                    $scope.getUserAccounts();
                }
            };
            userAccounts.UserAccount.post(options);
        };
        $scope.pageIndex = 0;
        $scope.pageSize = 0;
        $scope.pager = null;
        $scope.newUser=null;
        $scope.editUserVisible=false;
        $scope.getUserAccounts =function(){

            var options = {
                pageIndex: $scope.pageIndex,
                pageSize: $scope.pageSize,
                success: function (response) {
                    $scope.userAccounts = response.Accounts;
                    $scope.pager = response.pager;
                }
            }
            userAccounts.UserAccounts.list(options);
        };
        $scope.deleteUserAccount=function(id){
            var options = {
                id:id,
                success: function (response) {
                    $scope.getUserAccounts();
                }
            }
            userAccounts.UserAccount.delete(options);
        }
        $scope.saveUserAccount=function(account){
            if(account.isNew)
                postUserAccount(account);
            else
               putUserAccount(account);
        }
        $scope.addUser=function(){
            $scope.newUser = new UserModel();
            $scope.editUserVisible=true;
        };
        $scope.cancelAddUser=function(){
            $scope.newUser = null;
            $scope.editUserVisible=false;
        };
    }]);

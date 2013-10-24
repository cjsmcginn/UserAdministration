'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services'])
    .controller('UserAdministrationController', ['$scope', 'UserAccountService', function ($scope, userAccounts) {
        $scope.pageIndex = 0;
        $scope.pageSize = 0;
        $scope.getUserAccounts =function(){

            var options = {
                pageIndex: $scope.pageIndex,
                pageSize: $scope.pageSize,
                success: function (response) {
                    $scope.userAccounts = response.Accounts;
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
        $scope.putUserAccount=function(account){
            var options = {
                user:account,
                success: function (response) {
                    $scope.getUserAccounts();
                }
            };
            userAccounts.UserAccount.put(options);
        }
        $scope.postUserAccount=function(account){
            var options = {
                user:account,
                success: function (response) {
                    $scope.getUserAccounts();
                }
            };
            userAccounts.UserAccount.post(options);
        }
    }]);

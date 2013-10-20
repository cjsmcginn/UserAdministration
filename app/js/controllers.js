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

    }]);

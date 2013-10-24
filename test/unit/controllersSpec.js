'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
    var mockBackend;

    beforeEach(module('myApp.controllers'));
    beforeEach(inject(function($injector){
        mockBackend = $injector.get('$httpBackend');

    }));
    it('should get user accounts when getUserAccountsList is called',inject(function($rootScope, $controller){
        mockBackend.expectGET('/useraccounts/1/10').respond(userAccounts);
        var scope = $rootScope.$new(),
            ctrl = $controller("UserAdministrationController",{$scope:scope});
        scope.pageIndex=1;
        scope.pageSize=10;
        scope.getUserAccounts();

    }));
    it('should delete user account when deleteUserAccount is called',inject(function($rootScope, $controller){
        mockBackend.expectDELETE('/useraccount/1').respond(200,'');
        mockBackend.expectGET('/useraccounts/1/10').respond(userAccounts);
        var scope = $rootScope.$new(),
            ctrl = $controller("UserAdministrationController",{$scope:scope});
        scope.pageIndex=1;
        scope.pageSize=10;
        scope.deleteUserAccount(1);
        mockBackend.flush();

    }));
    it('should put user account when putUserAccount is called',inject(function($rootScope, $controller){
        mockBackend.expectPUT('/useraccount').respond(200,'');
        mockBackend.expectGET('/useraccounts/1/10').respond(userAccounts);
        var scope = $rootScope.$new(),
            ctrl = $controller("UserAdministrationController",{$scope:scope});
        scope.pageIndex=1;
        scope.pageSize=10;
        scope.putUserAccount(userAccounts.Accounts[0]);
        mockBackend.flush();
    }));
    it('should put user account when putUserAccount is called',inject(function($rootScope, $controller){
        mockBackend.expectPOST('/useraccount').respond(200,'');
        mockBackend.expectGET('/useraccounts/1/10').respond(userAccounts);
        var scope = $rootScope.$new(),
            ctrl = $controller("UserAdministrationController",{$scope:scope});
        scope.pageIndex=1;
        scope.pageSize=10;
        scope.postUserAccount(userAccounts.Accounts[0]);
        mockBackend.flush();
    }));
});

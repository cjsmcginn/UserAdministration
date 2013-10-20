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

});

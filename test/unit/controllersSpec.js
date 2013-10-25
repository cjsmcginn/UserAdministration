'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function () {
    var mockBackend, scope, ctrl;

    beforeEach(module('myApp.controllers'));
    beforeEach(inject(function ($injector) {
        mockBackend = $injector.get('$httpBackend');

    }));
    beforeEach(inject(function (_$rootScope_, _$controller_) {
        scope = _$rootScope_.$new();
        ctrl = _$controller_("UserAdministrationController", {$scope: scope});
        scope.pageIndex = 1;
        scope.pageSize = 10;
    }));
    it('should get user accounts when getUserAccountsList is called', function () {
        mockBackend.expectGET('/useraccounts/1/10').respond(userAccounts);
        scope.getUserAccounts();

    });
    it('should delete user account when deleteUserAccount is called', function () {
        mockBackend.expectDELETE('/useraccount/1').respond(200, '');
        mockBackend.expectGET('/useraccounts/1/10').respond(userAccounts);
        scope.deleteUserAccount(1);
        mockBackend.flush();

    });

    it('should assign pager when getUserAccountsList is called', function () {

        var expectedResult = userAccounts;
        expectedResult.pager = {
            list: [1, 2, 3, 4],
            pageIndex: 1,
            totalRecords: 4,
            pageSize: 1,
            totalPages: 4
        };
        mockBackend.expectGET('/useraccounts/1/10').respond(expectedResult);
        expect(scope.pager).toBe(null);
        scope.getUserAccounts();
        mockBackend.flush();
        expect(scope.pager).not.toBe(null, "pager should not be null");
    });
    it('should call post when saveUserAccount is called and user account is new', function () {
        mockBackend.expectPOST('/useraccount').respond(200, '');
        mockBackend.expectGET('/useraccounts/1/10').respond(userAccounts);
        var account = new UserModel();
        account.isNew = true;
        scope.saveUserAccount(account);
        mockBackend.flush();
    });
    it('should call put when saveUserAccount is called and account is not new', function () {
        mockBackend.expectPUT('/useraccount').respond(200, '');
        mockBackend.expectGET('/useraccounts/1/10').respond(userAccounts);
        scope.saveUserAccount(userAccounts.Accounts[0]);
        mockBackend.flush();
    });
    it('should assign new user when add user is called', function () {
        expect(scope.newUser).toBe(null);
        scope.addUser();
        expect(scope.newUser).not.toBe(null);
    });
    it('should set new user to null when cancel user is called', function () {
        scope.addUser();
        expect(scope.newUser).not.toBe(null);
        scope.cancelAddUser();
        expect(scope.newUser).toBe(null);
    });
    it('should assign editUserVisible to true when add user is called', function () {
        expect(scope.editUserVisible).toBe(false);
        scope.addUser();
        expect(scope.editUserVisible).toBe(true);
    });
    it('should assign editUserVisible to false when add user is called, then cancel user is called', function () {
        scope.addUser();
        expect(scope.editUserVisible).toBe(true);
        scope.cancelAddUser();
        expect(scope.editUserVisible).toBe(false);
    });
});

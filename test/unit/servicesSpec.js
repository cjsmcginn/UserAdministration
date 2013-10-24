'use strict';

/* jasmine specs for services go here */

/* mainly tests services to make sure code is complete and callbacks are executed*/
describe('service', function() {
  var mockBackend;
  beforeEach(module('myApp.services'));
    beforeEach(inject(function($injector) {
        mockBackend=$injector.get('$httpBackend');
    }));
  describe('synchronization',function(){
      it('should not be null',function(){
          expect(mockBackend).not.toBe(undefined,'mock backend is undefined');

      });

  });
  describe('UserAccounts',function(){
     it('should return accounts',inject(function(UserAccountService){
       mockBackend.expectGET('/useraccounts/1/10').respond(userAccounts);
         var actual = null;
         var options = {
             pageIndex:1,
             pageSize:10,
             success:function(data){
                 actual=data;
             }
         };
         var result = UserAccountService.UserAccounts.list(options);
         mockBackend.flush();
         expect(actual.Accounts.length).toBe(userAccounts.Accounts.length);
     }));
  });

   describe('UserAccount Get',function(){
        it('should return account',inject(function(UserAccountService){
            mockBackend.expectGET('/useraccount/1').respond(userAccounts.Accounts[0]);
            var actual = null;
            var options ={
                id:1,
                success:function(response){
                    actual=response;
                }
            }
            var result = UserAccountService.UserAccount.get(options);
            mockBackend.flush();
            expect(actual.Username).toBe('radleyMurray');
        }));
    });
    describe('UserAccount Delete',function(){
        it('should return account',inject(function(UserAccountService){
            mockBackend.whenDELETE('/useraccount/1').respond(200,{status:200,text:'Ok'});
            var actual = null;
            var options={
                id:1,
                success:function(response){
                    actual = response;
                },
                failure:function(response){
                    console.log('failed');
                }
            }

            var result = UserAccountService.UserAccount.delete(options);
            mockBackend.flush();
            expect(actual.text).toBe('Ok');
        }));
    });
    describe('UserAccount Post',function(){
       it('success should be called',inject(function(UserAccountService){
           mockBackend.expectPOST('/useraccount',{user:userAccounts.Accounts[0]}).respond(200,{status:200,text:'Ok'});
           var actual = null;
           var options={
               user:userAccounts.Accounts[0],
               success:function(response){
                   actual = response;
               },
               failure:function(response){
                   console.log('failed');
               }
           };
           var result = UserAccountService.UserAccount.post(options);
           mockBackend.flush();
           expect(actual.text).toBe('Ok');
       }))
    });
    describe('UserAccount Put',function(){
        it('success should be called',inject(function(UserAccountService){
            mockBackend.expectPUT('/useraccount',{user:userAccounts.Accounts[0]}).respond(200,{status:200,text:'Ok'});
            var actual = null;
            var options={
                user:userAccounts.Accounts[0],
                success:function(response){
                    actual = response;
                },
                failure:function(response){
                    console.log('failed');
                }
            };
            var result = UserAccountService.UserAccount.put(options);
            mockBackend.flush();
            expect(actual.text).toBe('Ok');
        }))
    });
});

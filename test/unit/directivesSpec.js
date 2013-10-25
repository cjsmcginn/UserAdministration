'use strict';

/* jasmine specs for directives go here */


describe('directives', function () {
    var $scope, $compile;
    beforeEach(module('myApp.directives'));
    beforeEach(inject(function (_$rootScope_, _$compile_) {
        $scope = _$rootScope_;
        $compile = _$compile_;
    }));
    describe('pager',function(){
       it('should render list when pager model changes',function(){
            $scope.pager = {};
           var element = $compile('<pager ng-model="pager"></pager>')($scope);
           expect(element.html()).not.toMatch(/li/);
           $scope.pager ={
               list:[1,2,3,4],
                   pageIndex:1,
               totalRecords:4,
               pageSize:1,
               totalPages:4
           };
           $scope.$digest();
           expect(element.html()).toMatch(/li/);
       });
    });

});


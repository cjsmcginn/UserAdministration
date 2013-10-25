'use strict';

/* Directives */


angular.module('myApp.directives', []).directive('pager', function ($compile) {

    var directiveDefinitionObject = {
        restrict: 'E',
        scope: false,
        render: function (scope, element, attrs) {
            if(!scope.pager)
                return;
            var tp = '<ul class="pager">';
            for (var i = 0; i < scope.pager.totalPages; i++)
                tp += '<li><a href="javascript:void(0)" ng-click="page('+(i + 1)+')">' + (i + 1) + '</a></li>'
            tp += '</ul>';
            element.html(tp);
            $compile(element.contents())(scope);
        },
        link: function (scope, element, attrs) {
            scope.$watch(attrs.ngModel, function () {
                if(scope.pager)
                    directiveDefinitionObject.render(scope,element,attrs);
            });
        }
    };
    return directiveDefinitionObject;
});
/**
 * Created by Chris on 10/25/13.
 */
angular.module('myApp.models', []).factory('UserModel', function () {

    return function () {
        return {
            Username: null,
            Password: null,
            CreatedOnUtc: null,
            Active: false,
            AccountEmail: null
        }
    }

})

/*
UserService.js
Author:Satish Sahani
*/

NodeApp.factory('NodeAppService', ['$http', '$q', function ($http, $q) {

    var serviceBase = "http://localhost:3000";
    var deferred = $q.defer();
    var nodeFactory = {};

    //Create
    var _createUser = function (userData) {
        var searchUrl = serviceBase + '/users';
        var successCallback = function (results) {
            return results.data;
        };
        var errorCallback = function (response) {
            var errorMessage = {};
            return errorMessage;
        };

        return $http.post(searchUrl, userData).then(successCallback, errorCallback);
    }

    //Read
    var _getUser = function (userId) {
        var searchUrl = serviceBase + '/users/'+userId;
        var successCallback = function (results) {
            return results.data;
        };
        var errorCallback = function (response) {
            var errorMessage = {};
            return errorMessage;
        };

        return $http.get(searchUrl).then(successCallback, errorCallback);
    }

    //Read All
    var _getAllUser = function () {
        var searchUrl = serviceBase + '/users';
        var successCallback = function (results) {
            return results.data;
        };
        var errorCallback = function (response) {
            var errorMessage = {};
            return errorMessage;
        };

        return $http.get(searchUrl).then(successCallback, errorCallback);
    }

    //Update
    var _updateUser = function (userId, userData) {
        var searchUrl = serviceBase + '/users/' + userId;
        var successCallback = function (results) {
            return results.data;
        };
        var errorCallback = function (response) {
            var errorMessage = {};
            return errorMessage;
        };

        return $http.put(searchUrl, userData).then(successCallback, errorCallback);
    }

    //Delete
    var _deleteUser = function (userId) {
        var searchUrl = serviceBase + '/users/' + userId;
        var successCallback = function (results) {
            return results.data;
        };
        var errorCallback = function (response) {
            var errorMessage = {};
            return errorMessage;
        };

        return $http.delete(searchUrl).then(successCallback, errorCallback);
    }

    nodeFactory.createUser = _createUser;
    nodeFactory.getUser = _getUser;
    nodeFactory.getAllUser = _getAllUser;
    nodeFactory.updateUser = _updateUser;
    nodeFactory.deleteUser = _deleteUser;

    return nodeFactory;

}]);
(function () {
    angular.module('myapp').factory('authenticationService', ['$http', 'commonService', function ($http, commonService) {
        var loggedInUser = {};
        var isUserLoggedIn = false;
        var service = {
            isUserLoggedIn: function () { return isUserLoggedIn },
            getProfile: function () { return getProfile() },
            validatePassword: function (user) { return validatePassword(user) },
            getAfterLoginMenus: function () { return getAfterLoginMenus() },
            setLogOffUser: function () { return setLogOffUser() },
            createPassword: function (user) { return createPassword(user) },
            forgotPassword: function (user) { return forgotPassword(user) }
        };
        return service;

        function getProfile() {
            if (loggedInUser == undefined) {
                return undefined;
            } else {
                return loggedInUser.profile[0];
            }
        }

        function getAfterLoginMenus() {
            return $http({
                method: 'GET',
                url: (commonService.getUrl() + 'api/getMenusList')
            }).then(function successCallback(response) {
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }

        function validatePassword(user) {
            return $http({
                method: 'POST',
                url: (commonService.getUrl() + 'api/getCustomer'),
                //params: { customer: user }
                data: {
                    Name: user.Name,
                    AccessKeyCode: user.AccessKeyCode
                }
            }).then(function successCallback(response) {
                loggedInUser = {};
                loggedInUser.profile = response.data.$values;
                isUserLoggedIn = true;
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }

        function setLogOffUser() {
            loggedInUser = undefined;
            isUserLoggedIn = false;
        }

        function createPassword(user) {
            return $http({
                method: 'POST',
                url: (commonService.getUrl() + 'api/createPassword'),
                data: {
                    Name: user.name,
                    AccessKeyCode: user.accessKeyCode
                }
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("create password failed");
            });
        }

        function forgotPassword(user) {
            return $http({
                method: 'POST',
                url: (commonService.getUrl() + 'api/forgotPassword'),
                data: {
                    Name: user.name
                }
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("create password failed");
            });
        }

    }]);
})();
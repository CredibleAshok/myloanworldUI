(function () {
    angular.module('myapp').factory('authenticationService', ['$http', 'commonService', function ($http, commonService) {
        var profile = {};
        var service = {
            getProfile: function () { return getProfile() },
            validatePassword: function (userName, pwd) { return validatePassword(userName, pwd) },
            getAfterLoginMenus: function () { return getAfterLoginMenus() }
        };
        return service;

        function getProfile() {
            return profile;
        }

        function getAfterLoginMenus() {
            return $http({
                method: 'GET',
                url: (commonService.environment == "local" ? commonService.localServiceUrl : commonService.serviceUrl) + 'api/getAfterLoginMenus'
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }

        function validatePassword(userName, pwd) {
            return $http({
                method: 'GET',
                url: (commonService.environment == "local" ? commonService.localServiceUrl : commonService.serviceUrl) + 'api/validatePassword'
            }).then(function successCallback(response) {
                profile = response.data;
                return response.data;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }
    }]);
})();
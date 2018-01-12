(function () {
    angular.module('myapp').factory('authenticationService', ['$http', 'commonService', function ($http, commonService) {
        var service = {
            validatePassword: function (userName, pwd) { return validatePassword(userName, pwd) },
            getManagementMenus: function (userName, pwd) { return getManagementMenus(userName, pwd) }
        };
        return service;
        
        function getManagementMenus(userName) {
            return $http({
                method: 'GET',
                url: (commonService.environment == "local" ? commonService.localServiceUrl : commonService.serviceUrl) + 'api/getManagementMenus'
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
                return response.data;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }
    }]);
})();
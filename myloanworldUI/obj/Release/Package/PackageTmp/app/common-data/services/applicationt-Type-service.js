(function () {
    angular.module('myapp').factory('applicationsService', ['$http', 'commonService', function ($http, commonService) {
        var service = {
            getAllApplications: function () { return getAllApplications() },
            getApplicationType: function () { return getApplicationType() }
        };
        return service;
        function getApplicationType() {
           return $http({
                method: 'GET',
                url: (commonService.environment == "local" ? commonService.localServiceUrl : commonService.serviceUrl) + 'api/getApplicationType'
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }
        function getAllApplications() {
            return $http({
                method: 'GET',
                url: (commonService.environment == "local" ? commonService.localServiceUrl : commonService.serviceUrl) + 'api/getAllApplications'
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }
    }]);
})();
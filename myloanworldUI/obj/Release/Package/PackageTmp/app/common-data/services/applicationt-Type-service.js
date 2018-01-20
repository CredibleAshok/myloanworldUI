(function () {
    angular.module('myapp').factory('applicationsService', ['$http', 'commonService', function ($http, commonService) {
        var service = {
            getApplicationById: function (applicationId) { return getApplicationById(applicationId) },
            getApplicationType: function () { return getApplicationType() },
            getApplicationHistory: function (applicationId) { return getApplicationHistory(applicationId) },
            getApplicationStatus: function () { return getApplicationStatus() }
        };
        return service;
        function getApplicationType() {
           return $http({
                method: 'GET',
                url: (commonService.getUrl() + 'api/getApplicationType')
            }).then(function successCallback(response) {
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }
        function getApplicationById(applicationId) {
            return $http({
                method: 'GET',
                params: { "applicationId": applicationId},
                url: (commonService.getUrl() + 'api/getApplicationById')
            }).then(function successCallback(response) {
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }

        function getApplicationHistory(applicationId) {
            return $http({
                method: 'GET',
                params: { "applicationId": applicationId },
                url: (commonService.getUrl() + 'api/getApplicationHistoryById')
            }).then(function successCallback(response) {
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }

        function getApplicationStatus() {
            return $http({
                method: 'GET',
                url: (commonService.getUrl() + 'api/getApplicationStatus')
            }).then(function successCallback(response) {
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }
    }]);
})();
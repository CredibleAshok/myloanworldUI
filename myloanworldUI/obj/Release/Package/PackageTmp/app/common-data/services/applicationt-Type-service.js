(function () {
    angular.module('myapp').factory('applicationsService', ['$http', 'commonService', function ($http, commonService) {
        var loanTypes = {};
        var service = {
            getApplicationById: function (applicationId) { return getApplicationById(applicationId) },
            getApplicationType: function () { return getApplicationType() },
            
            getApplicationHistory: function (applicationId) { return getApplicationHistory(applicationId) },
            getApplicationStatus: function () { return getApplicationStatus() },
            changeApplicationStatus: function (application) { return changeApplicationStatus(application) }
        };
        return service;
        
        function getApplicationType() {
            return $http({
                method: 'GET',
                url: (commonService.getUrl() + 'api/getApplicationType')
            }).then(function successCallback(response) {
                loanTypes = response.data.$values;
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }
        function getApplicationById(applicationId) {
            return $http({
                method: 'GET',
                params: { "applicationId": applicationId },
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
        function changeApplicationStatus(application) {
            return $http({
                method: 'POST',
                url: (commonService.getUrl() + 'api/changeApplicationStatus'),
                data: {
                    ApplicationId: application.ApplicationId,
                    ApplicationStatusId: application.ApplicationStatusId,
                    Comments: application.Comments,
                    CreatedBy: application.CreatedBy
                }
            }).then(function successCallback(response) {
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }
    }]);
})();
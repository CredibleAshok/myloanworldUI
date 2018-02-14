(function () {
    angular.module('myapp').factory('applicationsService', ['$http', 'commonService', function ($http, commonService) {
        var loanTypes = {};
        var service = {
            getApplicationById: function (applicationId) { return getApplicationById(applicationId) },
            getApplicationType: function () { return getApplicationType() },
            getApplicationHistory: function (applicationId) { return getApplicationHistory(applicationId) },
            getApplicationStatus: function () { return getApplicationStatus() },
            getApplicationStatusList: function () { return getApplicationStatus() }, // returning existing method
            getApplicationTypeList: function () { return getApplicationType() }, // returning existing method

            changeApplicationStatus: function (application) { return changeApplicationStatus(application) },
            saveApplicationStatus: function (applicationStatus) { return saveApplicationStatus(applicationStatus) },
            updateApplicationStatus: function (applicationStatus) { return updateApplicationStatus(applicationStatus) },
            saveApplicationType: function (applicationType) { return saveApplicationType(applicationType) },
            updateApplicationType: function (applicationType) { return updateApplicationType(applicationType) },
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

        function saveApplicationStatus(applicationStatus) {
            return $http({
                method: 'POST',
                url: (commonService.getUrl() + 'api/saveApplicationStatus'),
                data: {
                    Name: applicationStatus.Name,
                    UpdatedBy: applicationStatus.UpdatedBy
                }
            }).then(function successCallback(response) {
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }

        function saveApplicationType(applicationType) {
            return $http({
                method: 'POST',
                url: (commonService.getUrl() + 'api/saveApplicationType'),
                data: {
                    Name: applicationType.Name,
                    DescText:applicationType.DescText,
                    Href:applicationType.Href,
                    Icon:applicationType.Icon,
                    Sref:applicationType.Sref,
                    Localhref:applicationType.Localhref,
                    UpdatedBy: applicationType.UpdatedBy
                }
            }).then(function successCallback(response) {
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }

        function updateApplicationType(applicationType) {
            return $http({
                method: 'POST',
                url: (commonService.getUrl() + 'api/saveApplicationType'),
                data: {
                    Name: applicationType.Name,
                    DescText:applicationType.DescText,
                    Href:applicationType.Href,
                    Icon:applicationType.Icon,
                    Sref:applicationType.Sref,
                    Localhref:applicationType.Localhref,
                    UpdatedBy: applicationType.UpdatedBy,
                    ApplicationTypeId:applicationType.ApplicationTypeId
                }
            }).then(function successCallback(response) {
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }

        function updateApplicationStatus(applicationStatus) {
            return $http({
                method: 'POST',
                url: (commonService.getUrl() + 'api/updateApplicationStatus'),
                data: {
                    Name: applicationType.Name,
                    UpdatedBy: applicationType.UpdatedBy,
                    ApplicationStatusId: applicationType.ApplicationStatusId
                }
            }).then(function successCallback(response) {
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }
    }]);
})();

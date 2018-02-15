(function () {
    angular.module('myapp').factory('applicationsService', ['$http', 'commonService', 'authenticationService', function ($http, commonService, authenticationService) {
        var loanTypes = {};
        var service = {
            getApplicationById: function (applicationId) { return getApplicationById(applicationId) },
            getApplicationType: function () { return getApplicationType() },
            getLoanTypes: function () { return loanTypes },
            getApplicationHistory: function (applicationId) { return getApplicationHistory(applicationId) },
            getApplicationStatus: function () { return getApplicationStatus() },
            getApplicationList: function (searchFilter) { return getApplicationList(searchFilter) },

            changeApplicationStatus: function (application) { return changeApplicationStatus(application) },
            saveApplicationStatus: function (applicationStatus) { return saveApplicationStatus(applicationStatus) },
            updateApplicationStatus: function (applicationStatus) { return updateApplicationStatus(applicationStatus) },
            saveApplicationType: function (applicationType) { return saveApplicationType(applicationType) },
            updateApplicationType: function (applicationType) { return updateApplicationType(applicationType) },
        };
        return service;

        function getApplicationList(searchFilter) {
            return $http({
                method: 'GET',
                params: searchFilter,
                url: (commonService.getUrl() + 'api/getApplicationList')
            }).then(function successCallback(response) {
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }

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
                    UpdatedBy: authenticationService.getLoggedInUser().UserName
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
                    Name: applicationType.name,
                    DescText:applicationType.descText,
                    Href:applicationType.href,
                    Icon:applicationType.icon,
                    Sref:applicationType.sref,
                    Localhref:applicationType.localhref,
                    UpdatedBy: authenticationService.getLoggedInUser().UserName
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
                url: (commonService.getUrl() + 'api/updateApplicationType'),
                data: {
                    Name: applicationType.name,
                    DescText:applicationType.descText,
                    Href:applicationType.href,
                    Icon:applicationType.icon,
                    Sref:applicationType.sref,
                    Localhref:applicationType.localhref,
                    UpdatedBy: authenticationService.getLoggedInUser().UserName,
                    ApplicationTypeId:applicationType.applicationTypeId
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
                    Name: applicationStatus.Name,
                    UpdatedBy: applicationStatus.UpdatedBy,
                    ApplicationStatusId: applicationStatus.ApplicationStatusId
                }
            }).then(function successCallback(response) {
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }
    }]);
})();

(function () {
    angular.module('myapp').factory('commonHttpService', function ($http, commonService) {
        var getApplicationType = function () {
            $http({
                method: 'GET',
                url: (commonService.getUrl() + 'api/getApplicationType')
            }).then(function successCallback(response) {
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }
        return {
            applicationType: getApplicationType()
        };
    });
})();
myapp.factory('commonHttpService', function ($http, commonService) {
    var getApplicationType = function () {
        $http({
            method: 'GET',
            url: (commonService.environment == "local" ? commonService.localServiceUrl : commonService.serviceUrl) + 'api/getApplicationType'
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
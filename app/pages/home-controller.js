myapp.controller('homeController', function ($scope, commonService, $http) {
    var vm = this;
    vm.applicationType = {};
    vm.applicationTypeFromService = function () {
        $http({
            method: 'GET',
            url: (commonService.environment == "local" ? commonService.localServiceUrl : commonService.serviceUrl) + 'api/getApplicationType'
        }).then(function successCallback(response) {
            vm.applicationType = response.data.$values;
        }, function errorCallback(response) {
            console.log("failed");
        });
    };
    vm.applicationTypeFromService();
})
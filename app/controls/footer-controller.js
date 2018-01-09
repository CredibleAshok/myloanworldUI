myapp.controller('footerController', function ($scope, commonService, $http) {
    var vm = this;
    vm.myval = 10;
    vm.footerLinks = commonService.footerLinks;
    vm.getApplicationType = function () {
        $http({
            method: 'GET',
            url: (commonService.environment == "local" ? commonService.localServiceUrl : commonService.serviceUrl) + 'api/getApplicationType'
        }).then(function successCallback(response) {
            vm.footerLinks.col1 = response.data.$values;
        }, function errorCallback(response) {
            console.log("failed");
        });
    }
    vm.getApplicationType(); //on this page only static links are required but from service everything is returned
})
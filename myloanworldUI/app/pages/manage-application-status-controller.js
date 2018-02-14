(function () {
    angular.module('myapp').controller('manageApplicationStatusController', function (applicationsService, authenticationService) {
        var vm = this;
        vm.loggedInUser = authenticationService.getLoggedInUser();
        vm.getApplicationTypeList = function () {
            applicationsService.getApplicationStatusList().then(function (resp) {
                vm.applicationStatusList = resp;
            }, function (error) {
                console.log("loan type fetching failed");
            });
        }

        vm.getApplicationStatusList();
    })
})();

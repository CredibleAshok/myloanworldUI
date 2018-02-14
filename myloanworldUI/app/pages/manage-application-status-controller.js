(function () {
    angular.module('myapp').controller('manageApplicationStatusController', function (applicationsService, authenticationService) {
        var vm = this;
        vm.loggedInUser = authenticationService.getLoggedInUser();
        vm.getApplicationTypeList = function () {
            applicationsService.getApplicationStatusList().then(function (resp) {
                vm.applicationStatusList = resp;
            }, function (error) {
                console.log("Application Status fetching failed");
            });
        }

        vm.saveApplicationStatus = function () {
            applicationsService.saveApplicationStatus(vm.applicationStatus).then(function (resp) {
                vm.applicationStatusList = resp;
            }, function (error) {
                console.log("Application Status saving failed");
            });
        }
    })
})();

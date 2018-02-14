(function () {
    angular.module('myapp').controller('manageApplicationStatusController', function (applicationsService, authenticationService) {
        var vm = this;
        vm.loggedInUser = authenticationService.getLoggedInUser();
        vm.getApplicationStatusList = function () {
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

        vm.EditApplicationStatus = function (applicationStatusId){
            applicationsService.updateApplicationStatus(applicationStatusId).then(function (resp) {
                vm.applicationStatusList = resp;
            }, function (error) {
                console.log("Application Status Update failed");
            });
        }
    })
})();

(function () {
    angular.module('myapp').controller('manageApplicationTypeController', function (applicationsService, authenticationService) {
        var vm = this;
        vm.loggedInUser = authenticationService.getLoggedInUser();
        vm.getApplicationTypeList = function () {
            applicationsService.getApplicationTypeList().then(function (resp) {
                vm.applicationTypeList = resp;
            }, function (error) {
                console.log("application type fetching failed");
            });
        }

        vm.saveApplicationType = function () {
            applicationsService.saveApplicationType(vm.applicationType).then(function (resp) {
                vm.applicationTypeList = resp;
            }, function (error) {
                console.log("application type saving failed");
            });
        }

        vm.editApplicationType = function (applicationTypeId) {
            applicationsService.updateApplicationType(applicationTypeId).then(function (resp) {
                vm.applicationTypeList = resp;
            }, function (error) {
                console.log("Application Status Update failed");
            });
        }
    })
})();

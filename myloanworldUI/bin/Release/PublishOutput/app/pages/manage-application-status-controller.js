(function () {
    angular.module('myapp').controller('manageApplicationStatusController', function (applicationsService) {
        var vm = this;
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
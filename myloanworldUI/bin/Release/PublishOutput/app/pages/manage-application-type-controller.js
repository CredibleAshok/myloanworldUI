(function () {
    angular.module('myapp').controller('manageApplicationTypeController', function (applicationsService) {
        var vm = this;
        vm.getApplicationTypeList = function () {
            applicationsService.getApplicationTypeList().then(function (resp) {
                vm.applicationTypeList = resp;
            }, function (error) {
                console.log("loan type fetching failed");
            });
        }

        vm.getApplicationTypeList();
    })
})();
(function () {
    angular.module('myapp').controller('homeController', function ($scope, applicationTypeService) {
        var vm = this;
        applicationTypeService.getApplicationType().then(function (resp) {
            vm.applicationType = resp;
        }, function (err) {
            console.log("error is:- " + err.message);
        });
    })
})();
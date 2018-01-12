(function () {
    angular.module('myapp').controller('homeController', function ($scope, applicationsService) {
        var vm = this;
        applicationsService.getApplicationType().then(function (resp) {
            vm.applicationType = resp;
        }, function (err) {
            console.log("error is:- " + err.message);
        });
    })
})();
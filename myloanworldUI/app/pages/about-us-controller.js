(function(){
    var myapp = angular.module('myapp');
    myapp.controller('aboutUsController', function ($scope, applicationsService) {
    var vm = this;
    applicationsService.getApplicationType().then(function (resp) {
        vm.applicationType = resp;
    });
})
})();
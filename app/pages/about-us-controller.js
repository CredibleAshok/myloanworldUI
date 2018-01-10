(function(){
    var myapp = angular.module('myapp');
    myapp.controller('aboutUsController', function ($scope, applicationTypeService) {
    var vm = this;
    applicationTypeService.getApplicationType().then(function (resp) {
        vm.applicationType = resp;
    });
})
})();
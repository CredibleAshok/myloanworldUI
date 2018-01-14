(function () {
    angular.module('myapp').controller('footerController', function ($scope, commonService, applicationsService) {
    var vm = this;
    vm.footerLinks = commonService.footerLinks;
    //on this page only static links are required but from service everything is returned
    applicationsService.getApplicationType().then(function (resp) {
        vm.footerLinks.col1 = resp;
    }); 
})
})();
(function () {
    angular.module('myapp').controller('footerController', function ($scope, commonService, applicationTypeService) {
    var vm = this;
    vm.footerLinks = commonService.footerLinks;
    //on this page only static links are required but from service everything is returned
    applicationTypeService.getApplicationType().then(function (resp) {
        vm.footerLinks.col1 = resp;
    }); 
})
})();
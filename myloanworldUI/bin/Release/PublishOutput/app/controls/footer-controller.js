(function () {
    angular.module('myapp').controller('footerController', function ($scope, commonService, applicationsService, authenticationService) {
        var vm = this;
        vm.footerLinks = commonService.footerLinks;
        //on this page only static links are required but from service everything is returned
        applicationsService.getApplicationType().then(function (resp) {
            vm.footerLinks.col1 = resp;
        });

        authenticationService.getContactDetails().then(function (resp) {
            vm.contactDetail = resp[0];
        }, function (error) {
            toastr.error("contact detail fetch failed");                
        });
    })
})();

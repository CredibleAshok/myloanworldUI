//
(function () {
    angular.module('myapp').controller('manageContactDetailsController', function (authenticationService) {
        var vm = this;
        vm.loggedInUser = authenticationService.getLoggedInUser();
        if (vm.loggedInUser.FeatureName == 'Admin') {
            vm.getContactDetails = function () {
                authenticationService.getContactDetails().then(function (resp) {
                    vm.contactDetail = resp;
                }, function (error) {
                    console.log("Application Status fetching failed");
                });
            }
        }
        
    })
})();

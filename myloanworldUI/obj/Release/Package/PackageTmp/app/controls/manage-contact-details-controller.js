(function () {
    var controllerId = 'manageContactDetailsController';
    angular.module('myapp')
        .controller(controllerId, ['$scope', 'authenticationService', manageContactDetailsControllerFunction]);

    function manageContactDetailsControllerFunction($scope, authenticationService) {
        var vm = this;
        vm.loggedInUser = authenticationService.getLoggedInUser();
        
        if (vm.loggedInUser.FeatureName == 'Admin') {
            authenticationService.getContactDetails().then(function (resp) {
                vm.contactDetail = resp[0];
            }, function (error) {
                console.log("Application Status fetching failed");
            });
        }

        vm.updateContactDetails = function () {
            authenticationService.updateContactDetails(vm.contactDetail).then(function (resp) {
                alert(resp);
            }, function (error) {
                console.log("Application Status fetching failed");
            });
        }
        
    }
})();
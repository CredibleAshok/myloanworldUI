//
(function () {
    var controllerId = 'kycDetailController';
    angular.module('myapp')
        .controller(controllerId, ['$scope', '$state', '$stateParams', 'authenticationService', kycDetailControllerFunction]);

    function kycDetailControllerFunction($scope, $state, $stateParams, authenticationService) {
        var vm = this;
        vm.user = {};
        vm.user.Name = "testCustomer";
        vm.user.fname = $stateParams.fname;
        vm.user.contactNumber = $stateParams.contactNumber;
    }
})();
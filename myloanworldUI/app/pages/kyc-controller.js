//
(function () {
    var controllerId = 'kycDetailController';
    angular.module('myapp')
        .controller(controllerId, ['$scope', '$state', '$stateParams', 'authenticationService', 'enquiryService', kycDetailControllerFunction]);

    function kycDetailControllerFunction($scope, $state, $stateParams, authenticationService, enquiryService) {
        var vm = this;
        vm.customer = {};
        vm.enqiryId = 5; //$stateParams.enqiryId;

        vm.getCustomer = function () {
            enquiryService.getCustomer(vm.enqiryId).then(function (resp) {
                vm.customer = resp[0];
            }, function (error) {
                console.log("fail");
            });
        }

        vm.updateCustomer = function () {
            authenticationService.updateCustomer(vm.customer).then(function (success) {
                alert("Application Created Successfully!");
            }, function (error) {
                console.log("fail");
            });
        }

        vm.getCustomer();
    }
})();
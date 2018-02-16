//
(function () {
    var controllerId = 'kycDetailController';
    angular.module('myapp')
        .controller(controllerId, ['$scope', '$state', '$stateParams', 'authenticationService', 'enquiryService', 'commonService', '$timeout', kycDetailControllerFunction]);

    function kycDetailControllerFunction($scope, $state, $stateParams, authenticationService, enquiryService, commonService, $timeout) {
        var vm = this;
        vm.customer = {};
        vm.enqiryId = parseInt($stateParams.enquiryId);

        vm.getCustomer = function () {
            enquiryService.getCustomer(vm.enqiryId).then(function (resp) {
                vm.customer = resp[0];
            }, function (error) {
                console.log("fail");
            });
        }

        vm.getCommonData = function () {
            vm.sexOptions = commonService.sexOptions();
            vm.maritalStatusOptions = commonService.maritalStatusOptions();
        }

        vm.updateCustomer = function () {
            authenticationService.updateCustomer(vm.customer).then(function (success) {
                alert("Application Created Successfully!");
            }, function (error) {
                console.log("fail");
            });
        }

        vm.getCommonData();

        var waitTillCommondataLoaded = $timeout(function () {
            vm.getCustomer();
        });
        
        $scope.$on('$destroy', function () {
            $timeout.cancel(waitTillCommondataLoaded);
        });
    }
})();

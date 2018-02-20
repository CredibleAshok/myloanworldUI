//
(function () {
    var controllerId = 'kycDetailController';
    angular.module('myapp')
        .controller(controllerId, ['$scope', '$state', '$stateParams', '$filter', 'authenticationService', 'enquiryService', 'commonService', '$timeout','customDialog', kycDetailControllerFunction]);

    function kycDetailControllerFunction($scope, $state, $stateParams, $filter, authenticationService, enquiryService, commonService, $timeout, customDialog) {
        var vm = this;
        vm.customer = {};
        vm.enqiryId = parseInt($stateParams.enquiryId);

        vm.getCustomer = function () {
            enquiryService.getCustomer(vm.enqiryId).then(function (resp) {
                vm.customer = resp[0];
                vm.customer.Sex = $filter('filter')(vm.sexOptions, { 'SexId': vm.customer.SexId })[0];
                vm.customer.MaritalStatus = $filter('filter')(vm.maritalStatusOptions, { 'MaritalStatusId': vm.customer.MaritalStatusId })[0];
                //tagItems = $select.$filter('filter')(items, { 'isTag': true });
            }, function (error) {
                toastr.error("Customer Fetching failed.");
            });
        }

        vm.getCommonData = function () {
            vm.sexOptions = commonService.sexOptions();
            vm.maritalStatusOptions = commonService.maritalStatusOptions();
        }

        vm.updateCustomer = function () {
            authenticationService.updateCustomer(vm.customer).then(function (success) {
                //toastr.success("Application Updated Successfully!");
                customDialog.greenDialog("Application Updated Successfully!", "OK");
            }, function (error) {
                toastr.error("fail");
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

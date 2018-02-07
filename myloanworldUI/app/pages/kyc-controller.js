//
(function () {
    var controllerId = 'kycDetailController';
    angular.module('myapp')
        .controller(controllerId, ['$scope', '$state', '$stateParams', 'authenticationService', kycDetailControllerFunction]);

    function kycDetailControllerFunction($scope, $state, $stateParams, authenticationService) {
        var vm = this;
        vm.customer = {};
        vm.customer.UserName = "testCustomer";
        vm.customer.Name = "myName2";//$stateParams.fname;
        vm.customer.HomeAddress = "Home Address2";
        vm.customer.OfficeAddress = "Office Address2";
        vm.customer.HomeContact = "Home Contact2";
        vm.customer.OfficeContact = "Office Contanct2";

        vm.customer.ApplicationTypeId = 1;
        vm.customer.Comments = "Comments controller";
        vm.customer.CreatedBy = "Created By controller";
        
        vm.customer.contactNumber = $stateParams.contactNumber;
        vm.saveApplication = function () {
            authenticationService.saveApplication(vm.customer).then(function (success) {
                alert("Application Created Successfully!");
            }, function (error) {
                console.log("fail");
            });
        }
    }
})();
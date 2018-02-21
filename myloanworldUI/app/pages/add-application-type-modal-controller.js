//
(function () {
    var controllerId = 'addEditApplicationTypeModalController';
    angular.module('myapp')
        .controller(controllerId, ['$scope', 'applicationsService','customDialog', addEditApplicationTypeModalControllerFunction]);

    function addEditApplicationTypeModalControllerFunction($scope, applicationsService, customDialog) {
        var vm = this;
        vm.applicationType = $scope.applicationType;
        vm.action = $scope.action;
        //#region datePicker Settings
        vm.fromDateOpen = false;
        vm.toggleFromDate = function () {
            vm.fromDateOpen = !vm.fromDateOpen;
        }
        vm.toDateOpen = false;
        vm.toggleToDate = function () {
            vm.toDateOpen = !vm.toDateOpen;
        }
        //#endregion datePicker Settings
        vm.performAction = function () {
            if (vm.action == "New") {
                applicationsService.saveApplicationType(vm.applicationType).then(function (resp) {
                    customDialog.greenDialog("Application Type Saved Successfully!", "OK");
                    //toastr.success("Application Type saving passed");
                    $scope.modalInstance.close();
                }, function (error) {
                    toastr.error("Application Status saving failed");
                });
            } else {
                applicationsService.updateApplicationType(vm.applicationType).then(function (resp) {
                    customDialog.greenDialog("Application Type Updated Successfully!", "OK");
                    //toastr.success("Application Type update passsed");
                    $scope.modalInstance.close();
                }, function (error) {
                    toastr.error("Application Status Update failed");
                });

            }
        }

        vm.closeModal = function () {
            $scope.modalInstance.close();
        }
    }
})();
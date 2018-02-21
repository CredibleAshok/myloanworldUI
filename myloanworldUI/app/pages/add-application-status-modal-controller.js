//
(function () {
    var controllerId = 'addEditApplicationStatusModalController';
    angular.module('myapp')
        .controller(controllerId, ['$scope', 'applicationsService', addEditApplicationStatusModalControllerFunction]);

    function addEditApplicationStatusModalControllerFunction($scope, applicationsService) {
        var vm = this;
        vm.applicationStatus = $scope.applicationStatus;
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
                applicationsService.saveApplicationStatus(vm.applicationStatus).then(function (resp) {
                    toastr.success("Application Status saving passed");
                    $scope.modalInstance.close();
                }, function (error) {
                    toastr.error("Application Status saving failed");
                });
            } else {
                applicationsService.updateApplicationStatus(vm.applicationStatus).then(function (resp) {
                    toastr.success("Application Status update passsed");
                    $scope.modalInstance.close();
                }, function (error) {
                    console.log("Application Status Update failed");
                });

            }
        }

        vm.closeModal = function () {
            $scope.modalInstance.close();
        }
    }
})();
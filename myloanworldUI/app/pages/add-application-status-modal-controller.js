//
(function () {
    var controllerId = 'addEditApplicationStatusModalController';
    angular.module('myapp')
        .controller(controllerId, ['$scope', 'applicationsService', addEditApplicationStatusModalControllerFunction]);

    function addEditApplicationStatusModalControllerFunction($scope, applicationsService) {
        var vm = this;
        vm.applicationStatus = $scope.applicationStatus;
        vm.action = $scope.action;
        vm.performAction = function () {
            if (vm.action == "New") {
                applicationsService.saveApplicationStatus(vm.applicationStatus).then(function (resp) {
                    console.log("Application Status saving passed");
                    $scope.modalInstance.close();
                }, function (error) {
                    console.log("Application Status saving failed");
                });
            } else {
                applicationsService.updateApplicationStatus(vm.applicationStatus).then(function (resp) {
                    console.log("Application Status update passsed");
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
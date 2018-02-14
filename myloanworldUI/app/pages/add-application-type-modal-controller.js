//
(function () {
    var controllerId = 'addEditApplicationTypeModalController';
    angular.module('myapp')
        .controller(controllerId, ['$scope', 'applicationsService', addEditApplicationTypeModalControllerFunction]);

    function addEditApplicationTypeModalControllerFunction($scope, applicationsService) {
        var vm = this;
        vm.applicationType = $scope.applicationType;
        vm.action = $scope.action;
        vm.performAction = function () {
            if (vm.action == "New") {
                applicationsService.saveApplicationType(vm.applicationType).then(function (resp) {
                    console.log("Application Type saving passed");
                    $scope.modalInstance.close();
                }, function (error) {
                    console.log("Application Status saving failed");
                });
            } else {
                applicationsService.updateApplicationType(vm.applicationType).then(function (resp) {
                    console.log("Application Type update passsed");
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
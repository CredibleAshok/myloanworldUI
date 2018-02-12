(function () {
    var controllerId = 'changeApplicationModalController';
    angular.module('myapp')
        .controller(controllerId, ['$scope', 'applicationsService', changeApplicationModalControllerFunction]);

    function changeApplicationModalControllerFunction($scope, applicationsService) {
        var vm = this;
        vm.application = $scope.application;
        vm.application.OriginalApplicationStatusId = angular.copy(vm.application.ApplicationStatusId);
        vm.changeApplicationStatus = function () {
            if (vm.application.OriginalApplicationStatusId != parseInt(vm.application.ApplicationStatusId)) {
                $scope.modalInstance.close(vm.application);
            } else {
                vm.responseMessage = "Please change the status";
            }
            
        }
        vm.closeModal = function () {
            $scope.modalInstance.close();
        }
    }
})();
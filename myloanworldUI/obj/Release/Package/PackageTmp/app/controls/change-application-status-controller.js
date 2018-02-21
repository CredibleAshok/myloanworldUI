(function () {
    var controllerId = 'changeApplicationModalController';
    angular.module('myapp')
        .controller(controllerId, ['$scope', 'applicationsService', '$filter', changeApplicationModalControllerFunction]);

    function changeApplicationModalControllerFunction($scope, applicationsService, $filter) {
        var vm = this;
        vm.application = $scope.application;
        
        vm.changeApplicationStatus = function () {
            if (vm.application.OriginalApplicationStatusId != parseInt(vm.applicationStatus.ApplicationStatusId)) {
                vm.application.ApplicationStatusId = vm.applicationStatus.ApplicationStatusId;
                $scope.modalInstance.close(vm.application);
            } else {
                toastr.info("Please change the status");                
                vm.responseMessage = "Please change the status";
            }
        }

        vm.getApplicationStatus = function () {
            applicationsService.getApplicationStatus().then(function (resp) {
                vm.applicationStatusList = resp;
                vm.applicationStatus = $filter('filter')(vm.applicationStatusList, { 'ApplicationStatusId': vm.application.ApplicationStatusId })[0];
                vm.application.OriginalApplicationStatusId = angular.copy(vm.application.ApplicationStatusId);
            }, function (error) {
                toastr.error("Application Status fetching failed");                
            });
        }

        vm.closeModal = function () {
            $scope.modalInstance.close();
        }
        vm.getApplicationStatus();
    }
})();

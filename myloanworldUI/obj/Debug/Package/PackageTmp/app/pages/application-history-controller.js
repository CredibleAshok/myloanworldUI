(function () {
    var controllerId = 'applicationHistoryController';
    angular.module('myapp')
        .controller(controllerId, ['$stateParams', 'applicationsService', applicationHistoryFunction]);

    function applicationHistoryFunction($stateParams, applicationsService) {
        var vm = this;
        vm.applicationId = $stateParams.applicationId;
        vm.selectedIndex = -1;
        vm.showMore = function (rowNum) {
            vm.selectedIndex = rowNum;
        }
        vm.hideTooltip = function () {
            vm.selectedIndex = -1;
        }
        vm.getApplicationStatus = function () {
            applicationsService.getApplicationStatus().then(function (response) {
                vm.applicationStatus = response;
                vm.numOfCols = vm.applicationStatus.length;
                vm.colWidth = (12 / vm.numOfCols);
                vm.className = "col-sm-" + vm.colWidth;
                vm.getApplicationHistory(vm.applicationId);
            }, function (error) {
                console.log("application status call fetched.");
            });
        }

        vm.getApplicationHistory = function (applicationId) {
            applicationsService.getApplicationHistory(applicationId).then(function (response) {
                vm.applicationHistory = response;
            }, function (error) {
                console.log("history call fetched.");
            });
        }
        vm.getApplicationStatus();
    }
})();
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
        vm.classGenerator = function (index) {
            var totalCols = vm.applicationStatus.length;
            var className = "";
            if (totalCols == 4) {
                className = "col-sm-3";
            } else if (totalCols == 5 || totalCols == 6) {
                className = "col-sm-2";
            } else if (totalCols == 7 || totalCols == 8) {
                if (index == 0) {
                    className = "col-sm-1";
                } else if (index == 1) {
                    className = "col-sm-2";
                } else if (index == 2) {
                    className = "col-sm-2";
                } else if (index == 3) {
                    className = "col-sm-2";
                } else if (index == 4) {
                    className = "col-sm-2";
                } else if (index == 5) {
                    className = "col-sm-2";
                } else if (index == 6) {
                    className = "col-sm-1";
                }
            }
            return className;
        }
        vm.getApplicationStatus = function () {
            applicationsService.getApplicationStatus().then(function (response) {
                vm.applicationStatus = response;
                vm.getApplicationHistory(vm.applicationId);
            }, function (error) {
                toastr.error("application status call fetched.");
            });
        }

        vm.getApplicationHistory = function (applicationId) {
            applicationsService.getApplicationHistory(applicationId).then(function (response) {
                vm.applicationHistory = response;
            }, function (error) {
                toastr.error("history call fetched.");
            });
        }
        vm.getApplicationStatus();
    }
})();
(function () {
    var controllerId = 'allApplicationsController';
    angular.module('myapp')
        .controller(controllerId, ['$rootScope', '$uibModal', 'applicationsService', 'authenticationService','customDialog', allApplicationsControllerFunction]);

    function allApplicationsControllerFunction($rootScope, $uibModal, applicationsService, authenticationService, customDialog) {
        var vm = this;
        vm.loggedInUser = authenticationService.getLoggedInUser();
        vm.title = "All Applications";
        vm.searchFilter = {};

        vm.getApplicationList = function (searchFilter) {
            applicationsService.getApplicationList(vm.searchFilter).then(function (resp) {
                vm.applicationList = resp;
            }, function (err) {
                toastr.error("error is:- " + err.message);
            });
        }
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
        if (vm.loggedInUser.FeatureName == 'Customer') {
            vm.searchFilter.EnquiryId = vm.loggedInUser.EnquiryId;
            vm.getApplicationList(vm.searchFilter);
        }

        vm.openChangeApplicationStatusModal = function (application) {
            var modalScope = $rootScope.$new();
            modalScope.viewMode = "New";
            modalScope.application = application;// pass anything to modal scope from this.
            var modalOptions = {
                templateUrl: 'app/controls/change-application-status.html',
                scope: modalScope,
                keyboard: true,
                windowClass: 'wide-modal',
                backdrop: 'static',
                resolve: {
                    viewMode: function () {
                        return 'New';
                    }
                }
            };
            modalScope.modalInstance = $uibModal.open(modalOptions);
            modalScope.modalInstance.result.then(function (data) {
                // Returned from modal, so refresh list.
                //vm.loggedInUser = data; // temporary, change this
                vm.changeApplicationStatus(data);
            }, function () {
                // Cancelled.
            })['finally'](function () {
                modalScope.modalInstance = undefined  // <--- This fixes
            });
        }
        vm.changeApplicationStatus = function (data) {
            // issue a call to service
            applicationsService.changeApplicationStatus(data).then(
                function (success) {
                    vm.getApplicationList(vm.searchFilter);
                    customDialog.greenDialog("Application Stauts Updated Successfully!", "OK");
                }, function (error) {
                    toastr.error("error changing application status");
                }
            );
        }
    }
})();

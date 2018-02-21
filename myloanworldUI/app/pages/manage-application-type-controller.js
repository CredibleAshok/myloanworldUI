(function () {
    angular.module('myapp').controller('manageApplicationTypeController', function ($rootScope, $uibModal, applicationsService, authenticationService) {
        var vm = this;
        vm.loggedInUser = authenticationService.getLoggedInUser();
        vm.getApplicationType = function () {
            vm.applicationTypeList = applicationsService.getLoanTypes();
        }

        vm.saveApplicationType = function () {
            applicationsService.saveApplicationType(vm.applicationType).then(function (resp) {
                vm.applicationTypeList = resp;
            }, function (error) {
                toastr.error("application type saving failed");                
            });
        }

        vm.openApplicationTypeModal = function (applicationType, action) {
            var modalScope = $rootScope.$new();
            modalScope.viewMode = "New";
            modalScope.applicationType = applicationType;// pass anything to modal scope from this.
            modalScope.action = action;
            var modalOptions = {
                templateUrl: 'app/pages/add-application-type-modal.html',
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
                //vm.changeApplicationStatus(data);
            }, function () {
                // Cancelled.
            })['finally'](function () {
                modalScope.modalInstance = undefined  // <--- This fixes
            });
        }
    })
})();

(function () {
    angular.module('myapp').controller('manageApplicationStatusController', function ($modal, $rootScope, applicationsService, authenticationService) {
        var vm = this;
        vm.loggedInUser = authenticationService.getLoggedInUser();
        vm.getApplicationStatus = function () {
            applicationsService.getApplicationStatus().then(function (resp) {
                vm.applicationStatusList = resp;
            }, function (error) {
                console.log("Application Status fetching failed");
            });
        }

        vm.openApplicationStatusModal = function (applicationStatus, action) {
            var modalScope = $rootScope.$new();
            modalScope.viewMode = "New";
            modalScope.applicationStatus = applicationStatus;// pass anything to modal scope from this.
            modalScope.action = action;
            //updateApplicationStatus
            var modalOptions = {
                templateUrl: 'app/pages/add-application-status-modal.html',
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
            modalScope.modalInstance = $modal.open(modalOptions);
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

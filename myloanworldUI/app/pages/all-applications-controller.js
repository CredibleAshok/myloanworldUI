(function () {
    var controllerId = 'applicationsController';
    angular.module('myapp')
        .controller(controllerId, ['$rootScope', '$modal', 'applicationsService', applicationsFunction]);

    function applicationsFunction($rootScope, $modal, applicationsService) {
        var vm = this;
        vm.loggedInUser.RoleType = 'Admin'; //check for user right.
        vm.title = "All Applications";
        vm.getAllApplications = function (applicationId) {
            applicationsService.getApplicationById(applicationId).then(function (resp) {
                if (applicationId != null) {
                    vm.application = resp;
                } else {
                    vm.applicationList = resp;
                }
            }, function (err) {
                console.log("error is:- " + err.message);
            });
        }
        vm.getAllApplications(null); // get all applications on page load.
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
            modalScope.modalInstance = $modal.open(modalOptions);
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
                    vm.getAllApplications(null);
                }, function (error) {
                    console.log("error changing application status");
                }
            );
        }
    }
})();
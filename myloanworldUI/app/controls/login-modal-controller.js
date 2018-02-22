(function () {
    var controllerId = 'loginModalController';
    angular.module('myapp')
        .controller(controllerId, ['$rootScope', '$scope', '$state', '$uibModal', 'authenticationService', loginModalControllerFunction]);

    function loginModalControllerFunction($rootScope, $scope, $state, $uibModal, authenticationService) {
        var vm = this;
        vm.user = {};
        vm.isbusy = false;
        //todo: uncomment these lines when testing
        //vm.user.UserName = "TestCustomer";
        //vm.user.AccessKeyCode = "Test";
        vm.validateUser = function () {
            vm.isbusy = true;
            authenticationService.validatePassword(vm.user).then(function (resp) {
                vm.isbusy = false;
                if (resp != undefined && resp.length > 0) {
                    vm.user = authenticationService.getLoggedInUser();
                    vm.getAfterLoginMenus();
                } else {
                    toastr.success("User details not correct!");                
                    vm.responseMessage = "User details not correct!";
                }
            }, function () {
                vm.user.AccessKeyCode = "";
                toastr.error("password validated failed.");                
            });
        };

        vm.getAfterLoginMenus = function () {
            vm.isbusy = true;
            var roleId = vm.user.FeatureName == 'Admin' ? 1 : 0;
            
            authenticationService.getAfterLoginMenus(roleId).then(function (resp) {
                vm.isbusy = false;
                vm.user.afterLoginMenu = resp;
                $scope.modalInstance.close(vm.user);
            }, function () {
                toastr.error("password validated failed.");                
            });
        }

        vm.closeModal = function () {
            $scope.modalInstance.close();
        }
        vm.redirectTo = function (state) {
            $scope.modalInstance.close();
            $state.go(state);
        }
        vm.openModal = function (modeName) {
            //close the login modal
            $scope.modalInstance.close();

            //open the forgot or create password modal.
            var modalScope = $rootScope.$new();
            modalScope.viewMode = "New";
            modalScope.modeName = modeName; //pass anything to modal scope from this.
            var modalOptions = {
                templateUrl: 'app/pages/create-password.html',
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
                // Returned from modal, so required nothing from the closed modal.
            }, function () {
                // Cancelled.
            })['finally'](function () {
                modalScope.modalInstance = undefined  // <--- This fixes
            });
        }
    }
})();

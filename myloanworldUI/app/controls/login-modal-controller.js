(function () {
    var controllerId = 'loginModalController';
    angular.module('myapp')
        .controller(controllerId, ['$rootScope', '$scope', '$state', '$modal', 'authenticationService', loginModalControllerFunction]);

    function loginModalControllerFunction($rootScope, $scope, $state, $modal, authenticationService) {
        var vm = this;
        vm.user = {};
        vm.user.UserName = "TestCustomer";
        vm.user.AccessKeyCode = "Test";
        vm.validateUser = function () {
            authenticationService.validatePassword(vm.user).then(function (resp) {
                if (resp != undefined && resp.length > 0) {
                    vm.user = authenticationService.getLoggedInUser();
                    vm.getAfterLoginMenus();
                } else {
                    vm.responseMessage = "User details not correct!";
                }
            }, function () {
                vm.user.AccessKeyCode = "";
                console.log("password validated failed.");
            });
        };

        vm.getAfterLoginMenus = function () {
            authenticationService.getAfterLoginMenus().then(function (resp) {
                vm.user.afterLoginMenu = resp;
                $scope.modalInstance.close(vm.user);
            }, function () {
                console.log("password validated failed.");
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
            modalScope.modalInstance = $modal.open(modalOptions);
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

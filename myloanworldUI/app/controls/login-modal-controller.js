(function () {
    var controllerId = 'loginModalController';
    angular.module('myapp')
        .controller(controllerId, ['$scope', '$state', 'authenticationService', loginModalControllerFunction]);

    function loginModalControllerFunction($scope, $state, authenticationService) {
        var vm = this;
        vm.user = {};
        vm.user.UserName = "TestCustomer";
        vm.user.AccessKeyCode = "Test";
        vm.validateUser = function () {
            authenticationService.validatePassword(vm.user).then(function (resp) {
                if (resp != undefined && resp.length > 0) {
                    vm.user = resp[0];
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
    }
})();
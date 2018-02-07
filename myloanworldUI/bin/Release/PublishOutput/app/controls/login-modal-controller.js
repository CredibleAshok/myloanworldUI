﻿(function () {
    var controllerId = 'loginModalController';
    angular.module('myapp')
        .controller(controllerId, ['$scope', '$state', 'authenticationService', loginModalControllerFunction]);

    function loginModalControllerFunction($scope, $state, authenticationService) {
        var vm = this;
        vm.user = {};
        vm.user.Name = "testCustomer";
        vm.user.AccessKeyCode = "mypassword";
        vm.validateUser = function () {
            authenticationService.validatePassword(vm.user).then(function (resp) {
                if (resp != undefined) {
                    vm.user = resp[0];
                    vm.getAfterLoginMenus();
                }
            }, function () {
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
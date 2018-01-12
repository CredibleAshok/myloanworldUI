(function () {
    var controllerId = 'loginModalController';
    angular.module('myapp')
        .controller(controllerId, ['$scope', 'authenticationService', loginModalControllerFunction]);

    function loginModalControllerFunction($scope, authenticationService) {
        var vm = this;
        vm.user = {};
        vm.user.userName = "ashok";
        vm.user.pwd = "password";
        var loggedInUser = {};
        vm.validateUser = function () {
            authenticationService.validatePassword(vm.user.userName, vm.user.pwd).then(function (resp) {
                loggedInUser = resp;
                vm.getAfterLoginMenus();
            }, function () {
                console.log("password validated failed.");
            });
        };

        vm.getAfterLoginMenus = function () {
            authenticationService.getAfterLoginMenus().then(function (resp) {
                loggedInUser.afterLoginMenu = resp;
                $scope.modalInstance.close(loggedInUser);
            }, function () {
                console.log("password validated failed.");
            });
        }
    }
})();
(function () {
    var controllerId = 'loginModalController';
    angular.module('myapp')
        .controller(controllerId, ['authenticationService', loginModalControllerFunction]);

    function loginModalControllerFunction(authenticationService) {
        var vm = this;
        vm.user = {};
        vm.user.userName = "ashok";
        vm.user.pwd = "password";
        var loggedInUser = {};
        vm.validateUser = function () {
            authenticationService.validatePassword(vm.user.userName, vm.user.pwd).then(function (resp) {
                return loggedInUser = resp;    
            }, function () {
                console.log("password validated failed.");
            });
        };
    }
})();
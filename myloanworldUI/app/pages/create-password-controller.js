// This same screen and controller would be used to create user password and forget password. 
// In case of create password both textbox would be seen but in case of forget password. only user id would be asked.
(function () {
    var controllerId = 'createPasswordController';
    angular.module('myapp')
        .controller(controllerId, ['$state', 'applicationsService', 'authenticationService', createPasswordFunction]);

    function createPasswordFunction($state, applicationsService, authenticationService) {
        var vm = this;
        vm.title = $state.current.name == "forgotPassword" ? "Forget Password" : "Create Password";
        vm.user = { "name": "TestCustomer", "accessKeyCode": "mypassword" };
        vm.response = "";
        vm.performAction = function () {
            if ($state.current.name != "forgotPassword") {
                authenticationService.createPassword(vm.user).then(function (resp) {
                    // function sucess, ask user to go to his registered email id and login again with the new password
                    vm.response = resp;
                }, function (error) {
                });
            } else {
                authenticationService.forgotPassword(vm.user).then(function (resp) {
                    // function sucess, ask user to go to his registered email id and login again with the new password
                    vm.response = resp;
                }, function (error) {
                    // in case of error
                });
            }
        }
    }
})();
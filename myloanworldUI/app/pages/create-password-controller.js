﻿// This same screen and controller would be used to create user password and forget password. 
// In case of create password both textbox would be seen but in case of forget password. only user id would be asked.
(function () {
    var controllerId = 'createPasswordController';
    angular.module('myapp')
        .controller(controllerId, ['$scope', '$rootScope', '$state', 'authenticationService', 'customDialog', createPasswordFunction]);

    function createPasswordFunction($scope, $rootScope, $state, authenticationService, customDialog) {
        var vm = this;
        vm.title = $scope.modeName == "forgotPassword" ? "Forget Password" : "Create Password";
        vm.user = {};
        vm.response = "";
        vm.performAction = function () {
            if ($scope.modeName != "forgotPassword") {
                authenticationService.createPassword(vm.user).then(function (resp) {
                    // function sucess, ask user to go to his registered email id and login again with the new password
                    //vm.response = resp;
                    if (resp != undefined) {
                        //toastr.success("Your password created");
                        customDialog.greenDialog("Thanks! Your password created!", "OK");
                        $scope.modalInstance.close();
                    }
                }, function (error) {
                    toastr.error("Password creation Failed.");
                });
            } else {
                authenticationService.forgotPassword(vm.user).then(function (resp) {
                    // function sucess, ask user to go to his registered email id and login again with the new password
                    vm.response = resp;
                }, function (error) {
                    toastr.error("Forget Password Failed.");
                    // in case of error
                });
            }
        }

        vm.closeModal = function () {
            console.log($scope.modalInstance);
            $scope.modalInstance.close();
        }
    }
})();

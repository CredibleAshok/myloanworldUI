//

(function () {
    var controllerId = 'profileController';
    angular.module('myapp')
        .controller(controllerId, ['authenticationService', profileControllerFunction]);

    function profileControllerFunction(authenticationService) {
        var vm = this;
        vm.profile = {};
        vm.profile = authenticationService.getProfile();
    }
})();
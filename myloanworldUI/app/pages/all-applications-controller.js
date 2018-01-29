(function () {
    var controllerId = 'applicationsController';
    angular.module('myapp')
        .controller(controllerId, ['applicationsService', applicationsFunction]);

    function applicationsFunction(applicationsService) {
        var vm = this;
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

        vm.getApplicationHistory = function (applicationId) {

        }
    }
})();
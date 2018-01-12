(function () {
    var controllerId = 'allApplicationsController';
    angular.module('myapp')
        .controller(controllerId, ['applicationsService', allApplicationsFunction]);

    function allApplicationsFunction(applicationsService) {
        var vm = this;
        applicationsService.getAllApplications().then(function (resp) {
            vm.allApplications = resp;
        }, function (err) {
            console.log("error is:- " + err.message);
        });
    }
})();
(function () {
    var controllerId = 'applicationHistoryController';
    angular.module('myapp')
        .controller(controllerId, ['$stateParams', 'applicationsService', applicationHistoryFunction]);

    function applicationHistoryFunction($stateParams, applicationsService) {
        var vm = this;
        vm.applicationId = $stateParams.applicationId;
        vm.getApplicationStatus = function () {
            applicationsService.getApplicationStatus().then(function (response) {
                vm.applicationStatus = response;
                vm.getApplicationHistory(vm.applicationId);
            }, function (error) {
                console.log("application status call fetched.");
            });
        }

        vm.getApplicationHistory = function (applicationId) {
            applicationsService.getApplicationHistory(applicationId).then(function (response) {
                vm.applicationHistory = response;
            }, function (error) {
                console.log("history call fetched.");
            });
        }
        vm.getApplicationStatus();
        //vm.getApplicationHistory(vm.applicationId);
        //vm.mytotalValue = [{
        //    "stageName": 1
        //}, {
        //    "stageName": 2
        //}, {
        //    "stageName": 3
        //}, {
        //    "stageName": 4
        //}, {
        //    "stageName": 5
        //}];
        //vm.actualValue = [{
        //    "mystage": 1,
        //    "comment": "comment 1"
        //}, {
        //    "mystage": 2,
        //    "comment": "comment 2"
        //}, {
        //    "mystage": 3,
        //    "comment": "comment 3"
        //}, {
        //    "mystage": 4,
        //    "comment": "comment 4"
        //}];
    }
})();
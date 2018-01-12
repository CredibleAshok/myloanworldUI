(function () {
    angular.module('myapp').directive('loanTypes', function (applicationsService) {
        //loan-type
        return {
            restrict: 'E',
            transclude: true,
            scope: {

            },
            templateUrl: 'app/controls/loan-type.html',
            link: function (scope, element, attr) {
                scope.excludeLoanType = attr.excludeLoanType;
                applicationsService.getApplicationType().then(function (resp) {
                    scope.applicationType = resp;
                });
            }
        };
    });
})();
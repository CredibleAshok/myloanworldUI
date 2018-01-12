(function () {
    angular.module('myapp').directive('loanTypes', function (applicationTypeService) {
        //loan-type
        return {
            restrict: 'E',
            transclude: true,
            scope: {

            },
            templateUrl: 'app/controls/loan-type.html',
            link: function (scope, element, attr) {
                scope.excludeLoanType = attr.excludeLoanType;
                applicationTypeService.getApplicationType().then(function (resp) {
                    scope.applicationType = resp;
                });
            }
        };
    });
})();
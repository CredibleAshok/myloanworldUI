myapp.directive('loanTypes', function (commonService) {
    //loan-type
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            
        },
        templateUrl: 'app/controls/loan-type.html',
        link: function (scope, element, attr) {
            scope.myLoanTypes = commonService.loanTypes;
            scope.excludeLoanType = attr.excludeLoanType;
        }
    };
});
myapp.directive('loanTypes', function (commonService,$http) {
    //loan-type
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            
        },
        templateUrl: 'app/controls/loan-type.html',
        link: function (scope, element, attr) {
                
            scope.excludeLoanType = attr.excludeLoanType;
            function getApplicationType() {
                $http({
                    method: 'GET',
                    url: (commonService.environment == "local" ? commonService.localServiceUrl : commonService.serviceUrl) + 'api/getApplicationType'
                }).then(function successCallback(response) {
                    scope.applicationType = response.data.$values;
                }, function errorCallback(response) {
                    console.log("failed");
                    });
            }
            getApplicationType();
            
        }
    };
});
myapp.controller('aboutUsController', function ($scope, commonService, $http) {
    var vm = this;
    vm.loanTypes = commonService.loanTypes;
    console.log(commonService.serviceUrl + 'api/getEnquiry');
    vm.myloanType = {};
    vm.loanTypesFromService = function () {
        $http({
            method: 'GET',
            //url: 'http://localhost/myloanworldService/api/getproducts'
            url: commonService.serviceUrl + 'api/getEnquiry'
        }).then(function successCallback(response) {
            vm.loanTypes = response.data.$values;
        }, function errorCallback(response) {
            console.log("failed");
        });
    };
    
    //vm.loanTypesFromService();
})
(function () {
    angular.module('myapp').factory('enquiryService', ['$http', 'commonService', function ($http, commonService) {
        var service = {
            getEnquiryList: function (searchFilter) { return getEnquiryList(searchFilter) }
        };
        return service;

        function getEnquiryList(searchFilter) {
            return $http({
                method: 'GET',
                params: searchFilter,
                url: (commonService.getUrl() + 'api/getAllEnquiry')
            }).then(function successCallback(response) {
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }
    }]);
})();
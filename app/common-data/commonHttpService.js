myapp.factory('commonHttpService', function ($http) {
    return {
        loanTypes: function () {
            return $http({
                method: 'GET',
                url: 'http://localhost/myloanworldService/api/getproducts'
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        },
    };
});
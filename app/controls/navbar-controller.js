myapp.controller('navbarController', function ($scope, commonService, commonHttpService,$http) {
    var vm = this;
    vm.getApplicationType = function () {
        $http({
            method: 'GET',
            url: (commonService.environment == "local" ? commonService.localServiceUrl : commonService.serviceUrl) + 'api/getApplicationType'
        }).then(function successCallback(response) {
            vm.applicationType = response.data.$values;
        }, function errorCallback(response) {
            console.log("failed");
        });
    }
    vm.getApplicationType();
    vm.topNavigationLinks = [{
        "topNavigationLinksId": 1,
        "name": "Home",
        "sortOrder": 1,
        "sref": 'home',
        "href": "app/pages/home.html"
    }, {
        "topNavigationLinksId": 2,
        "name": "About Us",
        "sortOrder": 2,
        "sref": 'aboutUs',
        "href": "app/pages/AboutUs.html"
    }, {
        "topNavigationLinksId": 3,
        "name": "Team",
        "sortOrder": 3,
        "sref": 'team',
        "href": "app/pages/teamDetail.html"
    }, {
        "topNavigationLinksId": 4,
        "name": "Apply Now",
        "sortOrder": 4,
        "sref": 'applyNow',
        "href": "app/pages/apply-now.html"
    }];
})
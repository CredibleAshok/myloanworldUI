myapp.controller('navbarController', function ($scope, commonService) {
    var vm = this;
    vm.loanTypes = commonService.loanTypes;
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
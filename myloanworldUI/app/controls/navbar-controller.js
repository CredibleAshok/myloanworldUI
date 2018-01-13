(function () {

    var controllerId = 'navbarController';
    angular.module('myapp')
        .controller(controllerId, ['$rootScope', '$modal', 'applicationsService', navbarControllerFunction]);

    function navbarControllerFunction($rootScope, $modal, applicationsService) {
        var vm = this;
        console.log("this is new method of calling function.");

        applicationsService.getApplicationType().then(function (resp) {
            vm.applicationType = resp;
        }, function (err) {
            console.log("error is:- " + err.message);
        });

        vm.openModal = function (add, channel) {
            vm.loggedInUser = { "userName": "Manya", "age": 9 };
            var modalScope = $rootScope.$new();
            modalScope.viewMode = "New";
            //modalScope.channel = channel; pass anything to modal scope from this.
            modalScope.businessStream = vm.businessStream;
            var modalOptions = {
                templateUrl: 'app/controls/login-modal.html',
                scope: modalScope,
                keyboard: true,
                windowClass: 'wide-modal',
                backdrop: 'static',
                resolve: {
                    viewMode: function () {
                        return 'New';
                    }
                }
            };
            modalScope.modalInstance = $modal.open(modalOptions);
            modalScope.modalInstance.result.then(function (data) {
                // Returned from modal, so refresh list.
                vm.loggedInUser = data; // temporary, change this
            }, function () {
                // Cancelled.
            })['finally'](function () {
                modalScope.modalInstance = undefined  // <--- This fixes
            });
        }
        $rootScope.$on('noManagementMenus', function () {
            vm.loggedInUser = undefined;
        });
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
    }
})();
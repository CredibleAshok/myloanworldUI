(function () {
    var myapp = angular.module('myapp');
    myapp.controller('enquiryController', function ($scope, enquiryService) {
        var vm = this;
        vm.loggedInUser.RoleType = 'Admin'; //check for user right.
        vm.title = "Search Enquiries";
        vm.searchFilter = {};
        vm.searchFilter.Name = "test";
        vm.searchFilter.ContactNumber = "9876543456";
        vm.getEnquiryList = function () {
            enquiryService.getEnquiryList(vm.searchFilter).then(function (resp) {
                return vm.enquiryList = resp;
            });
        }
        
    })
})();
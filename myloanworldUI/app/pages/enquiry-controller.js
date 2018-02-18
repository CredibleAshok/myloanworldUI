(function () {
    var myapp = angular.module('myapp');
    myapp.controller('enquiryController', function ($scope, enquiryService, authenticationService) {
        var vm = this;
        vm.loggedInUser = authenticationService.getLoggedInUser(); //check for user right.

        vm.title = "Search Enquiries";
        vm.searchFilter = {};
        //vm.searchFilter.Name = "test";
        //vm.searchFilter.ContactNumber = "9876543456";

        if (vm.loggedInUser.FeatureName == 'Customer') {
            vm.searchFilter.EnquiryId = vm.loggedInUser.EnquiryId;
            enquiryService.getEnquiryList(vm.searchFilter).then(function (resp) {
                return vm.enquiryList = resp;
            });
        }

        
        vm.getEnquiryList = function () {
            enquiryService.getEnquiryList(vm.searchFilter).then(function (resp) {
                return vm.enquiryList = resp;
            });
        }
    })
})();

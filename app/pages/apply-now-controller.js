myapp.controller('applyNowController', function ($scope, $stateParams) {
    var vm = this;
    vm.enquiry = {};
    vm.enquiry.name = "";
    vm.enquiry.moblieNumber = "";
    vm.enquiry.email = "";
    vm.enquiry.loanAmt = $stateParams.loanAmt;
    vm.enquiry.tennure = "";
    vm.enquiry.situation = "";
})
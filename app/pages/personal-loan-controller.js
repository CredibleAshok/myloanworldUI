myapp.controller('personalLoanController', function ($scope, commonService) {
    var vm = this;
    vm.loanTypes = commonService.loanTypes;
    vm.footerLinks = commonService.footerLinks;
})
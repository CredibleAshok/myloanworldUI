myapp.controller('aboutUsController', function ($scope, commonService) {
    var vm = this;
    vm.loanTypes = commonService.loanTypes;
})
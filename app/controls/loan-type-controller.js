myapp.controller('loanTypeController', function ($scope, commonService) {
    var vm = this;
    vm.loanTypes = commonService.loanTypes;
})
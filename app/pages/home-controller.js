myapp.controller('homeController', function ($scope, commonService) {
    var vm = this;
    vm.loanTypes = commonService.loanTypes;
})
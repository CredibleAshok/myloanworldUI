myapp.controller('footerController', function ($scope, commonService) {
    var vm = this;
    vm.myval = 10;
    vm.footerLinks = commonService.footerLinks;
})
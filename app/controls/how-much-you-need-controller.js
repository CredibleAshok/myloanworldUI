myapp.controller('howMuchYouNeedController', function () {
    var vm = this;
    vm.inputValue = 10000;
    vm.sliderMin = 10000;
    vm.sliderMax = 100000;
    vm.changeValue = function () {
        var lblMoneyValue = document.getElementById('moneyValue');
        var lblInputValue = document.getElementById('inputValue');
        lblMoneyValue.innerHTML = lblInputValue.value;
        vm.howMuchYouNeed = lblInputValue.value;
    };
});
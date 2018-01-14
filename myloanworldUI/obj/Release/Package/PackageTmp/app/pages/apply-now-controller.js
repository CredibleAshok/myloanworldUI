(function(){
    angular.module('myapp').controller('applyNowController', function ($scope, $stateParams, $http, commonService) {
    var vm = this;
    vm.enquiry = {};
    if (commonService.environment == "local") {
        vm.enquiry.name = "Ashok1";
        vm.enquiry.moblieNumber = "9876543238";
        vm.enquiry.email = "akshdfk.askdhf@gmail.com";
        vm.enquiry.loanAmt = $stateParams.loanAmt == undefined ? 12000 : $stateParams.loanAmt;
        vm.enquiry.tennure = "12";
        vm.enquiry.comments = "Ashok is my name";
    } else {
        vm.enquiry.loanAmt = $stateParams.loanAmt == undefined ? 12000 : $stateParams.loanAmt;
    }
    
    vm.sendEmail = function () {
        var emptyForm = document.getElementById("emptyForm");
        var newChild = '<form id="emailForm" action="http://formspree.io/ashok.forklift@gmail.com" method="POST"><button id="sendEmail" type="submit">Send Email</button>'
            + '<input type="text" name="Customer Name" value="' + vm.enquiry.name + '">'
            + '<input type="text" name="Loan Amount" value="' + vm.enquiry.loanAmt + '">'
            + '<input type="text" name="Email" value="' + vm.enquiry.email + '">'
            + '<input type="text" name="Comments" value="' + vm.enquiry.comments + '">'
            + '<input type="text" name="Tennure" value="' + vm.enquiry.tennure + '">'
            + '<input type="text" name="Mobile Number" value="' + vm.enquiry.moblieNumber + '"></form>';
        emptyForm.insertAdjacentHTML('beforeend', newChild);
        var emailFrom = document.getElementById("emailForm");
        emailFrom.submit();
        console.log("email sent");
        emptyForm.remove();
        console.log("form removed");
    }
    vm.saveProducts = function () {
        $http({
            method: 'POST',
            url: (commonService.environment == "local" ? commonService.localServiceUrl : commonService.serviceUrl) + 'api/saveEnquiry',
            data: {
                Name: vm.enquiry.name,
                ContactNumber: vm.enquiry.moblieNumber,
                LoanAmt: vm.enquiry.loanAmt,
                Comments: vm.enquiry.comments
            }
        }).then(function successCallback(response) {
            vm.enquiryList = response.data.$values;
            console.log("value saved");
            // now submit form
            vm.sendEmail();      
        }, function errorCallback(response) {
            console.log("database saving failed");
        });
    }
})
})();
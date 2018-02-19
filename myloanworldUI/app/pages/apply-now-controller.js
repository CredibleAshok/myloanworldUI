(function () {
    angular.module('myapp').controller('applyNowController', function ($scope, $state, $stateParams, $http, commonService, applicationsService, enquiryService) {
        var vm = this;
        vm.enquiry = {};
        vm.isbusy = true;
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

        vm.getLoanTypes = function () {
            vm.isbusy = true;
            applicationsService.getApplicationType().then(function (resp) {
                vm.loanTypes = resp;
                //vm.isbusy = false;
            }, function (error) {
                console.log("loan type fetching failed");
            });
        }

        vm.getCommonData = function () {
            vm.isbusy = true;
            vm.sexOptions = commonService.sexOptions();
            vm.maritalStatusOptions = commonService.maritalStatusOptions();
            //vm.isbusy = false;
        }

        vm.getCommonData();
        //This function is no more used, but keeping this as a souviner because this was something i learnt new.
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

        vm.saveEnquiry = function () {
            vm.isbusy = true;
            enquiryService.saveEnquiry(vm.enquiry).then(function (success) {
                //vm.isbusy = false;
                toastr.success(success);
                $state.go('home');
                //vm.sendEmail();
            }, function (err) {
                toastr.error("database saving failed:- " + response.exceptionMessage);
            });
        }
        // load loan types on page load.
        vm.getLoanTypes();

    })
})();
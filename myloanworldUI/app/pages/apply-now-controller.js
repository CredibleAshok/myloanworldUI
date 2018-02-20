(function () {
    angular.module('myapp').controller('applyNowController', function ($scope, $state, $stateParams, $http, commonService, applicationsService, enquiryService, customDialog) {
        var vm = this;
        vm.enquiry = {};
        vm.isbusy = false;
        vm.enquiry.loanAmt = $stateParams.loanAmt == undefined ? 120000 : $stateParams.loanAmt;

        vm.getLoanTypes = function () {
            vm.isbusy = true;
            applicationsService.getApplicationType().then(function (resp) {
                vm.loanTypes = resp;
                vm.isbusy = false;
            }, function (error) {
                vm.isbusy = false;
                toastr.error("loan type fetching failed:- " + response.exceptionMessage);
            });
        }

        vm.getCommonData = function () {
            vm.isbusy = true;
            vm.sexOptions = commonService.sexOptions();
            vm.maritalStatusOptions = commonService.maritalStatusOptions();
            vm.isbusy = false;
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
                vm.isbusy = false;
                customDialog.greenDialog("Thanks! " + vm.enquiry.firstName + ", for your Enquiry. We will soon get in touch with you!", "OK");//toastr.success("Enquiry Saved!");
                $state.go('home');
                //vm.sendEmail();
            }, function (err) {
                vm.isbusy = false;
                toastr.error("database saving failed:- " + response.exceptionMessage);
            });
        }
        // load loan types on page load.
        vm.getLoanTypes();
    })
})();
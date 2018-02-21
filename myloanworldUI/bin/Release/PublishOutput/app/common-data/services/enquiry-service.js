﻿(function () {
    angular.module('myapp').factory('enquiryService', ['$http', 'commonService', function ($http, commonService) {
        var service = {
            getEnquiryList: function (searchFilter) { return getEnquiryList(searchFilter) },
            getCustomer: function (enquiryId) { return getCustomer(enquiryId) },
            saveEnquiry: function (enquiry) { return saveEnquiry(enquiry) }
        };
        return service;

        function getCustomer(enquiryId) {
            return $http({
                method: 'GET',
                url: (commonService.getUrl() + 'api/getCustomerByEnquiryId?enquiryId=' + enquiryId)
            }).then(function successCallback(response) {
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }
        function getEnquiryList(searchFilter) {
            return $http({
                method: 'GET',
                params: searchFilter,
                url: (commonService.getUrl() + 'api/getAllEnquiry')
            }).then(function successCallback(response) {
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }

        function saveEnquiry(enquiry) {
            return $http({
                method: 'POST',
                url: (commonService.getUrl() + 'api/saveEnquiry'),
                data: {
                    Name: enquiry.firstName + (enquiry.middleName == undefined ? "" : enquiry.middleName) + (enquiry.lastName == undefined ? "" : enquiry.lastName),
                    ContactNumber: enquiry.moblieNumber,
                    LoanAmt: enquiry.loanAmt,
                    Comments: enquiry.comments,
                    Tennure: enquiry.tennure,
                    EmailId: enquiry.EmailId,
                    customer: {
                        HomeAddress: enquiry.homeAddress,
                        OfficeAddress: enquiry.officeAddress,
                        Name: enquiry.firstName + (enquiry.middleName == undefined ? "" : enquiry.middleName) + (enquiry.lastName == undefined ? "" : enquiry.lastName),
                        HomeContact: enquiry.localHomeContact,
                        OfficeContact: enquiry.localOfficeContact,
                        //OtherContact:
                        Sex: enquiry.Sex == undefined ? true : enquiry.Sex.SexId, // by default male
                        FirstName: enquiry.firstName,
                        MiddleName: enquiry.middleName,
                        LastName: enquiry.lastName,
                        MaritalStatusId: enquiry.MaritalStatus == undefined ? 1 : enquiry.MaritalStatus.MaritalStatusId, // by default 1
                        MotherName: enquiry.motherName,
                        FatherName: enquiry.fatherName,
                        OtherPersonal: enquiry.otherPersonal,
                        HusbandName: enquiry.husbandName,
                        LocalHomeContact: enquiry.localHomeContact,
                        LocalOfficeContact: enquiry.localOfficeContact,
                        //LocalOfficeAddress: enquiry.localOfficeAddress,
                        LocalHomeAddress: enquiry.localHomeAddress,
                        ApplicationTypeId: enquiry.applicationType == undefined ? 1 : enquiry.applicationType.applicationTypeId
                    }
                }
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("database saving failed:- " + response.exceptionMessage);
            });
        }
    }]);
})();
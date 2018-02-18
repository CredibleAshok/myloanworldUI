(function () {
    angular.module('myapp').factory('authenticationService', ['$http', 'commonService', function ($http, commonService) {
        var loggedInUser = {};
        var isUserLoggedIn = false;
        var service = {
            isUserLoggedIn: function () { return isUserLoggedIn },
            getLoggedInUser: function () { return loggedInUser },
            getProfile: function () { return getProfile() },
            validatePassword: function (user) { return validatePassword(user) },
            getAfterLoginMenus: function () { return getAfterLoginMenus() },
            getContactDetails: function () { return getContactDetails() },

            updateContactDetails: function (contactDetail) { return updateContactDetails(contactDetail) },
            setLogOffUser: function () { return setLogOffUser() },
            createPassword: function (user) { return createPassword(user) },
            forgotPassword: function (user) { return forgotPassword(user) },
            updateCustomer: function (customer) { return updateCustomer(customer) }
        };
        return service;

        

        function getProfile() {
            if (loggedInUser == undefined) {
                return undefined;
            } else {
                return loggedInUser.profile;
            }
        }
        
        function getContactDetails() {
            return $http({
                method: 'GET',
                url: (commonService.getUrl() + 'api/getContactDetails')
            }).then(function successCallback(response) {
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }
        function getAfterLoginMenus() {
            return $http({
                method: 'GET',
                url: (commonService.getUrl() + 'api/getMenusList')
            }).then(function successCallback(response) {
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("failed");
            });
        }
        function updateContactDetails(contactDetail) {
            return $http({
                method: 'POST',
                url: (commonService.getUrl() + 'api/updateContactDetails'),
                data: {
                    EmailList: contactDetail.EmailList,
                    AddressList: contactDetail.AddressList
                }
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("update contact details failed");
            });
        }

        function validatePassword(user) {
            return $http({
                method: 'POST',
                url: (commonService.getUrl() + 'api/getUser'),
                data: {
                    UserName: user.UserName,
                    AccessKeyCode: user.AccessKeyCode
                }
            }).then(function successCallback(response) {
                loggedInUser = response.data.$values[0];
                isUserLoggedIn = true;
                return response.data.$values;
            }, function errorCallback(response) {
                console.log("user authentication failed");
            });
        }

        function setLogOffUser() {
            loggedInUser = undefined;
            isUserLoggedIn = false;
        }

        function createPassword(user) {
            return $http({
                method: 'POST',
                url: (commonService.getUrl() + 'api/createPassword'),
                data: {
                    UserName: user.UserName,
                    AccessKeyCode: user.accessKeyCode
                }
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("create password failed");
            });
        }

        function forgotPassword(user) {
            return $http({
                method: 'POST',
                url: (commonService.getUrl() + 'api/forgotPassword'),
                data: {
                    UserName: user.UserName
                }
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("create password failed");
            });
        }

        function updateCustomer(customer) {
            return $http({
                method: 'POST',
                url: (commonService.getUrl() + 'api/updateCustomer'),
                data: {
                    FirstName: customer.FirstName,
                    MiddleName: customer.MiddleName,
                    LastName: customer.LastName,
                    CustomerId: customer.CustomerId,
                    HomeAddress: customer.HomeAddress,
                    OfficeAddress: customer.OfficeAddress,
                    HomeContact: customer.HomeContact,
                    OfficeContact: customer.OfficeContact,
                    EnquiryId: customer.EnquiryId,
                    ApplicationTypeId: customer.ApplicationTypeId,
                    Comments: customer.Comments,
                    CreatedBy: customer.CreatedBy
                }
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("update customer failed");
            });
        }

    }]);
})();
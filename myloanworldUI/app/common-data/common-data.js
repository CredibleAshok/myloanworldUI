(function () {
    angular.module('myapp').factory('commonService', function () {
        var environment = "local";// this can have 3 values like 'local', 'localIIS' and 'live'
        var liveServiceUrl = "http://service.myloanworld.com/";
        var localIISServiceUrl = "http://localhost/myloanworldService/";
        var localServiceUrl = "http://localhost:55750/";
        
        var service = {
            loanTypes: function () { return loanTypes() },
            footerLinks: function () { return footerLinks() },
            getUrl: function () { return getUrl() },
            sexOptions: function () { return sexOptions() },
            maritalStatusOptions: function () { return maritalStatusOptions() }
        };
        return service;
        function footerLinks() {
            return {
                "col1": [{
                    "name": "Home Loan",
                    "href": "app/pages/home.html"
                }, {
                    "name": "Auto Loan",
                    "href": "app/pages/auto.html"
                }, {
                    "name": "Education Loan",
                    "href": "app/pages/education.html"
                }, {
                    "name": "Business Loan",
                    "href": "app/pages/business.html"
                }],
                "col2": [{
                    "name": "About Us",
                    "href": "app/pages/aboutus.html"
                }, {
                    "name": "Press",
                    "href": "app/pages/press.html"
                }, {
                    "name": "Team",
                    "href": "app/pages/team.html"
                }, {
                    "name": "Partnership",
                    "href": "app/pages/partnership.html"
                }],
                "col3": [{
                    "name": "Terms Of Use",
                    "href": "app/pages/terms-of-use.html"
                }, {
                    "name": "Privacy Policy",
                    "href": "app/pages/privacy-policy.html"
                }, {
                    "name": "Fair Practice Code",
                    "href": "app/pages/fair-practice-code.html"
                }, {
                    "name": "List of KYC Documents",
                    "href": "app/pages/list-of-kyc-documents.html"
                }]
            }
        }
        function loanTypes() {
            return [{
                "loanTypeId": 1,
                "name": "Home Loan",
                "href": "myloanworld.com/home",
                "sortOrder": 1,
                "icon": "home",
                "sref": 'homeloan',
                "href": "app/pages/home.html"
            }, {
                "loanTypeId": 2,
                "name": "Auto Loan",
                "href": "myloanworld.com/auto",
                "sortOrder": 2,
                "icon": "car",
                "sref": 'autoloan',
                "href": "app/pages/auto.html",
                "desc": "At My Loan World we understand that “life happens” and that our bank accounts are often unprepared for unexpected financial needs. From medical emergencies to happy events like weddings, My Loan World’s consumer business focuses on providing unsecured"
            }, {
                "loanTypeId": 3,
                "name": "Education Loan",
                "href": "myloanworld.com/education",
                "sortOrder": 3,
                "icon": "book",
                "sref": 'educationloan',
                "href": "app/pages/education.html",
                "desc": "At My Loan World we understand that “life happens” and that our bank accounts are often unprepared for unexpected financial needs. From medical emergencies to happy events like weddings, My Loan World’s consumer business focuses on providing unsecured"
            }, {
                "loanTypeId": 4,
                "name": "Business Loan",
                "href": "myloanworld.com/business",
                "sortOrder": 4,
                "icon": "briefcase",
                "sref": 'businessloan',
                "href": "app/pages/business.html",
                "desc": "At My Loan World we understand that “life happens” and that our bank accounts are often unprepared for unexpected financial needs. From medical emergencies to happy events like weddings, My Loan World’s consumer business focuses on providing unsecured"
            }, {
                "loanTypeId": 4,
                "name": "Personal Loan",
                "href": "myloanworld.com/personal",
                "sortOrder": 4,
                "icon": "car",
                "sref": 'personalloan',
                "href": "app/pages/personal.html",
                "desc": "At My Loan World we understand that “life happens” and that our bank accounts are often unprepared for unexpected financial needs. From medical emergencies to happy events like weddings, My Loan World’s consumer business focuses on providing unsecured"
            }];
        }
        function sexOptions() {
            return [{ "name": "Male", "SexId": 1 }, { "name": "Female", "SexId": 2 }, { "name": "Not Disclosed", "SexId": 3 }];
        }
        function maritalStatusOptions() {
            return [{ "name": "Married", "MaritalStatusId": 1 }, { "name": "UnMarried", "MaritalStatusId": 2 }, { "name": "Divorced", "MaritalStatusId": 3 }, { "name": "NeverMarried", "MaritalStatusId": 4 }];
        }
        
        function getUrl() {
            if (environment == 'local') {
                return localServiceUrl;
            } else if (environment == 'localIIS') {
                return localIISServiceUrl;
            } else if (environment == 'live') {
                return liveServiceUrl;
            }
        }
    });
})();
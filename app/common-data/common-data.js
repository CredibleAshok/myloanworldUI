myapp.factory('commonService', function () {
    return {
        loanTypes: [{
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
            "href": "app/pages/auto.html"
        }, {
            "loanTypeId": 3,
            "name": "Education Loan",
            "href": "myloanworld.com/education",
            "sortOrder": 3,
            "icon": "book",
            "sref": 'educationloan',
            "href": "app/pages/education.html"
        }, {
            "loanTypeId": 4,
            "name": "Business Loan",
            "href": "myloanworld.com/business",
            "sortOrder": 4,
            "icon": "briefcase",
            "sref": 'businessloan',
            "href": "app/pages/business.html"
        }, {
            "loanTypeId": 4,
            "name": "Personal Loan",
            "href": "myloanworld.com/personal",
            "sortOrder": 4,
            "icon": "car",
            "sref": 'personalloan',
            "href": "app/pages/personal.html"
        }],
        footerLinks: {
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
    };
});